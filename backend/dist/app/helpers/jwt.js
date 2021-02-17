"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const logger_1 = require("@config/logger");
const generarToken = ({ uid, username }) => {
    const { SECRET_JWT_SEED } = process.env;
    const payload = { uid, username };
    logger_1.log.info('generando token');
    return jsonwebtoken_1.sign(payload, String(SECRET_JWT_SEED), {
        expiresIn: '2h'
    });
};
exports.generarToken = generarToken;
