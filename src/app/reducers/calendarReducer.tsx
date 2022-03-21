
import moment from 'moment';
import { i_calendar_state as i_state, i_calendar_action as i_action,i_events  } from '../interfaces';
import types from '../types';

const initState:i_state = {
    events: [{
        id: new Date().getTime().toString(),
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        note: '',
        bgcolor: '#fafafa',
        user: {
            checking: false,
            uid: '',
            name: ''
        }
    }],
    active: undefined
}

const calendarReducer = ( state = initState, action:i_action ):i_state => {

    const { eventAddNew, eventSetActive, eventClearActive,eventUpdate, eventDelete } = types;

    switch( action.type ) {
        case eventAddNew:
            if( state.events && action.payload.aux ){
                state = {
                    ...state,
                    events: [
                        ...state.events,
                        action.payload.aux
                    ]
                }
            }
            break;
        case eventSetActive :
            state = {
                ...state,
                active: action.payload.active
            }
            break;
        case eventClearActive:
            state = {
                ...state,
                active: action.payload.active
            }
            break;
        case eventUpdate:
            if( state.events ){
                state = {
                    ...state,
                    events: state.events.map(( event:i_events ) => {
                        if( action.payload.aux && event.id === action.payload.aux.id ){
                            return action.payload.aux
                        }
                        return event;
                    })
                }
            }
            break;
        case eventDelete:
            if( state.events ){
                state = {
                    ...state,
                    events: state.events.filter((event:i_events) => {
                        if( action.payload.aux && event.id !== action.payload.aux.id ){
                            return event
                        }
                    }),
                    active: undefined,
                    aux: undefined
                }
            }
            break;
    }

    return state;
};

export default calendarReducer;