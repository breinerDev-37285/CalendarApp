import types from '../types';
import { i_ui_action as i_action } from '../interfaces';

export const uiOpenModalAction = ():i_action => {
    const { uiOpenModal } = types;

    return {
        type: uiOpenModal
    }
}

export const uiCloseModalAction = ():i_action => {
    const { uiCloseModal } = types;

    return {
        type: uiCloseModal
    }
}