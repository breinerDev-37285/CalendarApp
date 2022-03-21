import types from '../types';
import { i_ui_state as i_state, i_ui_action as i_action } from '../interfaces';

const initState:i_state = {
    modalOpen: false
}

const uiReducer = ( state = initState, action:i_action ):i_state => {
    
    const { uiOpenModal,uiCloseModal } = types;

    switch( action.type ){
        case uiOpenModal:
            state = {
                ...state,
                modalOpen: true
            }
            break;
            
        case uiCloseModal:
            state = initState;
            break
    }

    return state;
}



export default uiReducer;