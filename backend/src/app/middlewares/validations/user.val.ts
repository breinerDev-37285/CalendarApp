import { check } from 'express-validator';
import { userTypes } from '@typesSrc/user';


const emailVal = () => {
    const { field,msg } = userTypes.email;
    return check( field,msg )
        .isEmail()
        .not().isEmpty()
        .normalizeEmail()
}

const passwordVal = () => {
    const { field,msg } = userTypes.password;
    return check(field,msg)
        .not().isEmpty()
        .isString()
        .trim()
        .escape()
}

const usernameVal = () => {
    const { field,msg } = userTypes.username;
    return check(field,msg)
        .not().isEmpty()
        .isString()
        .trim()
        .escape()
}


export const userVal = ():Array<any> => {
    return [
        emailVal(),
        passwordVal(),
        usernameVal()
    ]
}