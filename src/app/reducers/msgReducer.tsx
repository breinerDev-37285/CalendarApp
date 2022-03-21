import types from "../types";
import { i_msg_action, i_msg_state } from '../interfaces';


const init:i_msg_state = {
    ok: false,
    msg: ''
}


const msgReducer = ( state = init, action:i_msg_action ):i_msg_state => {
    const { msgError,msgDelError } = types;

    switch( action.type ) {
        case msgError: 
            state = {
                ...state,
                ...action.payload
            };
            break;
        case msgDelError: {
            state = init;
            break;
        }
    }

    return state;
}

export default msgReducer 