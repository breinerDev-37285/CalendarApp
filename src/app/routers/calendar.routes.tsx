import React from 'react';
import { Switch,Route,useRouteMatch, Redirect } from 'react-router-dom';
import { CalendarScreen } from '../components/calendar';
import { NotFound } from '../components/mistakes';
import { NavBar } from '../components/ui'

const CalendarRoutes = () => {
    const { url } = useRouteMatch();
    const path = (path:string) =>  url === '/' ? path : path.replace('/','').trim()

    return (
        <div>
            <NavBar/>
            <Switch>
                <Route
                    path={ path('/') }
                    exact={true}
                    component={ CalendarScreen }
                />

                <Route
                    path={ path('/notfound') }
                    exact={true}
                    component={ NotFound }
                />

                <Redirect to={ path('/notfound') } />
            </Switch>
        </div>
    )
};


export default CalendarRoutes;