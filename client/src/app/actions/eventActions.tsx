import types from '../types';
import { i_calendar_action as i_action, i_events } from '../interfaces';

export const eventAddNewActions = ( event:i_events ):i_action => {
    const { eventAddNew } = types;

    return {
        type: eventAddNew,
        payload: {
            aux: event
        }
    }
}

export const eventSetActiveActions = ( event:i_events ):i_action => {
    const { eventSetActive } = types;

    return {
        type: eventSetActive,
        payload: {
            active: event
        }
    }
}


export const eventClearNoteActive = ():i_action => {
    const { eventClearActive } = types;

    return {
        type: eventClearActive,
        payload: {
            active: undefined
        }
    }
}

export const eventUpdateActions = ( event:i_events ):i_action => {
    const { eventUpdate } = types;

    return {
        type: eventUpdate,
        payload: {
            aux: event
        }
    }
}


export const eventDeleteActions = (event:i_events) => {
    const { eventDelete } = types;

    return {
        type:eventDelete,
        payload: {
            aux: event
        }
    }
}