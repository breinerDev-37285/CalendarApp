import { Redirect, Route } from 'react-router-dom';
import { i_route } from '../interfaces';


export const PrivateRoute = ({isAuthenticated,Component,...rest}:i_route) => {
    return <Route
        {...rest}
        component = { () => isAuthenticated ? Component() : <Redirect to='/auth/login'/> }
    />
}


export const PublicRoute = ({isAuthenticated,Component,...rest}:i_route) => {
    return <Route
        {...rest}
        component = { () => isAuthenticated ? <Redirect to='/'/> : Component() }
    />
}