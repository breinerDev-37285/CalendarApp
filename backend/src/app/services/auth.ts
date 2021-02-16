import { Request, Response } from 'express';
import User from '@database/models/user.model';
import { log } from '@config/logger';
import { generarToken } from '@helpers/jwt';


export const createUser = async ( req:Request, res:Response ) => {

    try {
        const user = new User( req.body );

        await user.save();

        const token = generarToken({uid: user.id, username: user.username});

        res.status(201).json({
            ok: true,
            token
        })
        
    } catch (error) {
        log.error(error);
        return res.status(500).json({
            ok: false, 
            msg: 'Por favor contacte a un administrador'
        })
    }

    return res.json({
        ok: true,
        msg: 'createUser'
    })
}


export const getLogin = ( req:Request, res:Response ) => {
    return res.json({
        ok: true,
        msg: 'getLogin'
    })
}


export const renewToken = ( req:Request, res:Response ) => {
    return res.json({
        ok: true,
        msg: 'renewToken'
    })
}