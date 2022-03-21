import { i_auth_state as i_user } from './authReducer.interface';

export interface i_calendar_state {
    events?: Array<i_events>;
    active?: i_events;
    aux?: i_events;
}

export interface i_calendar_action {
    type: string;
    payload: i_calendar_state;
}


export interface i_events {
    id: string;
    title:string;
    note: string;
    start: Date;
    end: Date;
    bgcolor?: string;
    user: i_user 
}