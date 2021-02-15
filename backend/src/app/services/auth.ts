import { Request, Response } from 'express'



export const createUser = ( req:Request, res:Response ) => {
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