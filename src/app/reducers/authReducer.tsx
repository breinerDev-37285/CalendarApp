import types  from "../types";
import { i_auth_state as i_state, i_auth_action as i_action} from '../interfaces';


const init:i_state = {
    checking: true,
    uid: undefined,
    name: undefined
}


const authReducer = (state = init, action:i_action):i_state => {
    const { authLogin,authFinishChecking,authLogout } = types;

    switch( action.type ){
        case authLogin: 
            state = {
                ...state,
                ...action.payload
            };
        break;
        case authFinishChecking:
            state = {
                ...state,
                ...action.payload
            };
        break;
        case authLogout: 
            state = {
                checking: false
            }
        break;
    }

    return state;
};


export default authReducer;