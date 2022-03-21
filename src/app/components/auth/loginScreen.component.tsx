import React,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions';
import useForm from '../../hooks/useForm';
import { i_redux } from '../../interfaces';

interface i_login {
    email: string;
    password: string;
}

const LoginScreen = () => {

    const dispatch = useDispatch();
    // const { ok: okErr, msg: msgErr } = useSelector((data:i_redux) => data.errorMsg);

    const [ values, handleInputChange ] = useForm({
        email: 'test@gmail.com',
        password: '12345678'
    });

    const { email,password } = values as i_login;

    const handleLogin = ( e:Event ) => {
        e.preventDefault();
        dispatch(startLogin(email,password));
    }

    return (
        <div className="auth_main">
            <div className="auth_box_container">
                <h3 className="mt-20">Iniciar Sesion</h3>
                <form
                    onSubmit={ handleLogin as any } 
                    className="auth_form_container">
                    <input 
                        type="email" 
                        className="auth_input"
                        placeholder="Correo"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                    <input 
                        type="password" 
                        className="auth_input"
                        placeholder="Contraseña"  
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }  
                    />

                    <Link 
                        to='/auth/register'
                        className="linking"    
                    >No tienes una cuenta?
                    </Link>

                    <input 
                        type="submit" 
                        value="Ingresar"
                        className="btn btn-primary btn-auth"
                    />
                </form>
            </div>
        </div>
    )
};

export default LoginScreen;