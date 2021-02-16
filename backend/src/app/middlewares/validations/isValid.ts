import { validationResult,check } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { userTypes } from '@typesSrc/user';

export const emailVal = () => {
    const { field,msg } = userTypes.email;
    return check( field,msg )
        .isEmail()
        .not().isEmpty()
        .normalizeEmail()
}

export const passwordVal = () => {
    const { field,msg } = userTypes.password;
    return check(field,msg)
        .not().isEmpty()
        .isString()
        .trim()
        .escape()
}

export const usernameVal = () => {
    const { field,msg } = userTypes.username;
    return check(field,msg)
        .not().isEmpty()
        .isString()
        .trim()
        .escape()
}

export default ( req:Request, res:Response,next:NextFunction ) => {
    const val = validationResult(req);

    if( !val.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            err: val.mapped()
        })
    }else{
        return next();
    }
}