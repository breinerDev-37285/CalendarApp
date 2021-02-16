import { verify } from 'jsonwebtoken';
import { log } from '@config/logger';
import { Request,Response,NextFunction } from 'express';


export const validarToken = ( req:Request, res:Response,next:NextFunction ) => {
    try {
        
        const token = req.header('x-token');
        const { SECRET_JWT_SEED } = process.env;

        if( !token ) return res.status(403).json({
            ok: false, 
            msg: 'No existe el token'
        })

        verify( token,String(SECRET_JWT_SEED),(err,payload) => {
            if( err ) {
                log.error(err)
                return res.status( 400 ).json({
                    ok: false,
                    msg: 'Por favor contacte a un administrador'
                })
            }

            req.body.tokenPayload = payload;
            return next();
        })

    } catch (error) {
        log.error(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contacte a un administrador'
        })
    }
}   