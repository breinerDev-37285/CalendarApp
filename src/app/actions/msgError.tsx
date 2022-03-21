import { i_msg_action, i_msg_state } from "../interfaces";
import types from "../types";



export const setErrorMsg = (err:i_msg_state):i_msg_action => {
    const { msgError } = types;

    return {
        type: msgError,
        payload: err
    }
}

export const delErrorMsg = ():i_msg_action => {
    const { msgDelError } = types;

    return {
        type: msgDelError
    }
}