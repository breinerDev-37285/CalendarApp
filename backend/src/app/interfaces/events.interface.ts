import { Document } from 'mongoose';
import i_user from '@interfaces/jwt';

export interface i_events {
    title: string;
    end: Date,
    start: Date,
    user: i_user
}


export interface i_events_model extends Document, i_events {  }