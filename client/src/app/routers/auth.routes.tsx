import React from 'react';
import { Switch,Route,useRouteMatch,Redirect } from 'react-router-dom';

// components 
import { LoginScreen,RegisterScreen } from '../components/auth';


const AuthRouter = () => {
    const { url } = useRouteMatch();

    return (
        <Switch>
            <Route 
                path={`${url}/login`}
                exact={ true }
                component={ LoginScreen }
            />
        
            <Route 
                path={`${url}/register`}
                exact={ true }
                component={ RegisterScreen }
            />

            <Redirect to={`${url}/login`}/>
           
        </Switch>
    );
}


export default AuthRouter;