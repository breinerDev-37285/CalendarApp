"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.end = exports.start = exports.titleVal = exports.usernameVal = exports.passwordVal = exports.emailVal = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("@typesSrc/index");
const isDate_1 = __importDefault(require("@helpers/isDate"));
const emailVal = () => {
    const { field, msg } = index_1.userTypes.email;
    return express_validator_1.check(field, msg)
        .isEmail()
        .not().isEmpty()
        .normalizeEmail();
};
exports.emailVal = emailVal;
const passwordVal = () => {
    const { field, msg } = index_1.userTypes.password;
    return express_validator_1.check(field, msg)
        .not().isEmpty()
        .isString()
        .trim()
        .escape();
};
exports.passwordVal = passwordVal;
const usernameVal = () => {
    const { field, msg } = index_1.userTypes.username;
    return express_validator_1.check(field, msg)
        .not().isEmpty()
        .isString()
        .trim()
        .escape();
};
exports.usernameVal = usernameVal;
const titleVal = () => {
    const { field, msg } = index_1.eventTypes.title;
    return express_validator_1.check(field, msg)
        .not().isEmpty()
        .isString()
        .trim();
};
exports.titleVal = titleVal;
const start = () => {
    const { field, msg } = index_1.eventTypes.start;
    return date(field, msg);
};
exports.start = start;
const end = () => {
    const { field, msg } = index_1.eventTypes.end;
    return date(field, msg);
};
exports.end = end;
const date = (field, msg) => express_validator_1.check(field, msg)
    .not().isEmpty()
    .custom(isDate_1.default);
exports.default = (req, res, next) => {
    const val = express_validator_1.validationResult(req);
    if (!val.isEmpty()) {
        return res.status(400).json({
            ok: false,
            err: val.mapped()
        });
    }
    else {
        return next();
    }
};
