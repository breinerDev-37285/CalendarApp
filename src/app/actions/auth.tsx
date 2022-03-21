import { fetchSinToken, fetchToken } from "../helpers/fetch";
import { i_auth_action } from "../interfaces";
import types from "../types";
import { delErrorMsg, setErrorMsg } from "./msgError";


export const startLogin = (email:string, password:string) => {
    return async(callback:Function) => {
        const resp = await fetchSinToken( 'auth/login',{ email, password}, 'POST' );
        const data = await resp.json();

        if( data.ok ) {
            localStorage.setItem('token', data.token);
            
            callback( login(data.uid,data.username) );
            callback( delErrorMsg() )
        }else {
            callback( setErrorMsg({
                ok: true,
                msg: data.msg
            }))
        }
        
    }
}


export const startRegister = (email:string, password:string, username:string) => {
    return async( callback:Function ) => {
        const resp = await fetchSinToken( 'auth/user',{email,password,username}, 'POST' );
        const data = await resp.json();

        if( data.ok ) {
            localStorage.setItem('token', data.token);

            callback( login(data.uid,data.username) );
            callback( delErrorMsg() );

        }else {
            callback( setErrorMsg({
                ok: true,
                msg: data.msg
            }))
        }

    }
}


export const startChecking = () => {
    return async( callback:Function ) => {
        const resp = await fetchToken( 'auth/token' );
        const data = await resp.json();


        if( data.ok ) {
            localStorage.setItem('token', data.token);

            callback( login(data.uid,data.username) );
            callback( delErrorMsg() );

        }else {
            callback( finishChecking() );
            callback( logout() )
        }

    }
}



export const finishChecking =  ():i_auth_action => {
    const { authFinishChecking } = types;

    return {
        type: authFinishChecking,
        payload:{
            checking: false
        }
    }
}


export const login =  ( uid:string, name:string):i_auth_action => {
    const { authLogin } = types;

    return {
        type: authLogin,
        payload:{
            uid,
            name,
            checking: false
        }
    }
}


export const startLogout = () => {
    return ( callback:Function ) => {
        callback( logout() );
    }
}


export const logout = ():i_auth_action => {
    const { authLogout } = types;
    localStorage.clear();

    return {
        type: authLogout
    }
}