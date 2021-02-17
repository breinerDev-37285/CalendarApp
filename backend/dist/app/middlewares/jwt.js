"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const logger_1 = require("@config/logger");
const validarToken = (req, res, next) => {
    res.header('X-Service', 'renewToken');
    try {
        const token = req.header('x-token');
        const { SECRET_JWT_SEED } = process.env;
        if (!token)
            return res.status(403).json({
                ok: false,
                msg: 'No existe el token'
            });
        jsonwebtoken_1.verify(token, String(SECRET_JWT_SEED), (err, payload) => {
            if (err) {
                logger_1.log.error(err);
                return res.status(400).json({
                    ok: false,
                    err: err.message
                });
            }
            req.body.tokenPayload = payload;
            req.body.user = payload.uid;
            return next();
        });
    }
    catch (error) {
        logger_1.log.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contacte a un administrador'
        });
    }
};
exports.validarToken = validarToken;
