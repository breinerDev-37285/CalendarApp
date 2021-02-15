import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import { uiReducer,authReducer,calendarReducer } from '../reducers/';
import thunk from 'redux-thunk';

const Reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    calendar: calendarReducer
});


const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = () => createStore( 
    Reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;