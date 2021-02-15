import { i_events } from './reducers/calendarReducer.interface';

export interface i_form extends i_events {
    title:string;
    note: string,
    start: Date,
    end: Date
}

export interface i_eventValidationForm {
    state: boolean,
    message: string
}
