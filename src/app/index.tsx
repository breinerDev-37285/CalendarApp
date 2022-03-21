import React from 'react';
import './styles/index.scss'
import { Provider } from 'react-redux';
import Store from './store';
import Routes from './routers';


const App = () => (
    <Provider store={ Store() } >
        <Routes/>
    </Provider>
);

export default App;