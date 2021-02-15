import types  from "../types";
import { i_auth_state as i_state, i_auth_action as i_action} from '../interfaces';


const init:i_state = {
    uid: '',
    name: ''
}


const authReducer = (state = init, action:i_action):i_state => {
    const { authLogin } = types;

    switch( action.type ){
        case authLogin: 
            state = {
                ...state,
                ...action.payload
            };
        break;
    }

    return state;
};


export default authReducer;