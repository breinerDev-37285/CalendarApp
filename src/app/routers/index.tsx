import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { startChecking } from '../actions';
import { i_redux } from '../interfaces';
import AuthRouter from './auth.routes';
import CalendarRoutes from './calendar.routes';
import { PrivateRoute, PublicRoute } from './types.routes';

const Routes = () => {

    const dispatch = useDispatch();
    const { checking,uid } = useSelector((data:i_redux) => data.auth)

    const isAuthenticated = uid ? true : false;

    useEffect(() => {
        dispatch(startChecking());
    },[ dispatch ]);

    
    

    if( checking ) {
        return <h1> Espere ....</h1>
    }

    return (
        <Router>
            <Switch>
                <PublicRoute 
                    isAuthenticated = { isAuthenticated }
                    path="/auth"
                    Component={ AuthRouter }
                />

                <PrivateRoute
                    path="/"
                    isAuthenticated = { isAuthenticated }
                    Component={ CalendarRoutes }
                />
            </Switch>
        </Router>
    )
};


export default Routes;