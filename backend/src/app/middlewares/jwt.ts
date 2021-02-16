import { sign,verify } from 'jsonwebtoken';
import { log } from '@config/logger'
import { Request,Response,NextFunction } from 'express';

export const generarToken = ( uid:string,username:string ) => {
    
    const { SECRET_JWT_SEED } = process.env;
    const payload = { uid,  username }

    return sign(payload,String(SECRET_JWT_SEED),{
        expiresIn: '2h'
    })
}