import { check } from 'express-validator';
import { userTypes } from '@typesSrc/user';
import { emailVal,passwordVal,usernameVal } from './isValid';

export const loginVal = ():Array<any> => {
    return [
        emailVal(),
        passwordVal()
    ]
}

export const userVal = ():Array<any> => {
    return [
        emailVal(),
        passwordVal(),
        usernameVal()
    ]
}