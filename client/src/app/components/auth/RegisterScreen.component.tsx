import React from 'react';
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <div className="auth_main">
            <div className="auth_box_container-dark">
                <h3 className="mt-20">Registro</h3>
                <form className="auth_form_container">
                    <input 
                        type="texxt" 
                        className="auth_input"
                        placeholder="Nombre"
                    />
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
                    <input 
                        type="password" 
                        className="auth_input"
                        placeholder="Repita la contraseña"    
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