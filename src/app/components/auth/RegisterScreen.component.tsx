import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startRegister } from '../../actions';
import { setErrorMsg } from '../../actions/msgError';
import { useForm } from '../../hooks';
import { i_redux } from '../../interfaces';

interface i_register {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

const RegisterScreen = () => {

    const dispath = useDispatch();
    const { msg } = useSelector((data:i_redux) => data.errorMsg)

    const [ values,handleInputChange ] = useForm({
        name: 'Breiner',
        email: 'test@gmail.com',
        password: '12345678',
        repeatPassword: '12345678'
    });


    const { name, email, password, repeatPassword } = values as i_register;

    const handleSubmit = ( e:Event ) => {
       e.preventDefault(); 

        if( password !== repeatPassword ) {
            return dispath( setErrorMsg({
                ok: true,
                msg: 'Las constraseñas no son iguales'
            }))
        }else {
            dispath( startRegister(email,password,name) );
        }

    }

    return (
        <div className="auth_main">
            <div className="auth_box_container-dark">
                <h3 className="mt-20">Registro</h3>
                <form 
                    onSubmit={ handleSubmit as any }
                    className="auth_form_container">
                    <input 
                        type="text" 
                        className="auth_input"
                        placeholder="Nombre"
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                    />
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
                    <input 
                        type="password" 
                        className="auth_input"
                        placeholder="Repita la contraseña"   
                        name="repeatPassword"
                        value={ repeatPassword }
                        onChange={ handleInputChange } 
                    />

                    <Link 
                        to='/auth/login'
                        className="linking-dark"    
                        >Tienes una cuenta?
                    </Link>

                    <input 
                        type="submit" 
                        value="Registrar"
                        className="btn btn-primary btn-auth-dark"
                    />
                </form>
            </div>
        </div>
    )
}


export default RegisterScreen;