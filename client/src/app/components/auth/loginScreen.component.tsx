import React from 'react';
import { Link } from 'react-router-dom'


const LoginScreen = () => {
    return (
        <div className="auth_main">
            <div className="auth_box_container">
                <h3 className="mt-20">Iniciar Sesion</h3>
                <form className="auth_form_container">
                    <input 
                        type="email" 
                        className="auth_input"
                        placeholder="Correo"
                    />
                    <input 
                        type="password" 
                        className="auth_input"
                        placeholder="Contraseña"    
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