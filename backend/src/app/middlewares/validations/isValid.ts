import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';


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