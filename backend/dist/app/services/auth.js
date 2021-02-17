"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewToken = exports.getLogin = exports.createUser = void 0;
const user_1 = __importDefault(require("@database/models/user"));
const logger_1 = require("@config/logger");
const jwt_1 = require("@helpers/jwt");
const bcryptjs_1 = require("bcryptjs");
const createUser = (req, res) => {
    res.header('X-Service', 'createUser');
    const user = new user_1.default(req.body);
    return user.save((err, data) => {
        if (err)
            return res.status(500).json({
                ok: false,
                err: err.message
            });
        const token = jwt_1.generarToken({ uid: user.id, username: user.username });
        return res.status(201).json({
            ok: true,
            token
        });
    });
};
exports.createUser = createUser;
const getLogin = async (req, res) => {
    res.header('X-Service', 'login');
    try {
        const { email, password } = req.body;
        const user = await user_1.default.findOne({ email }, 'password');
        if (!user)
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        if (!bcryptjs_1.compareSync(password, user.password))
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales invalidas'
            });
        const token = jwt_1.generarToken({ uid: user.id, username: user.username });
        res.status(201).json({
            ok: true,
            token
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
exports.getLogin = getLogin;
const renewToken = (req, res) => {
    res.header('X-Service', 'renewToken');
    const payload = req.body.tokenPayload;
    const token = jwt_1.generarToken(payload);
    return res.json({
        ok: true,
        token
    });
};
exports.renewToken = renewToken;
