import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRouter from './auth.routes';
import CalendarRoutes from './calendar.routes';
import { PrivateRoute, PublicRoute } from './types.routes';

const Routes = () => {

    const isAuthenticated = true;

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