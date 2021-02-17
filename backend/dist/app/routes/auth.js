"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("@services/auth");
const user_val_1 = require("@middlewares/validations/user.val");
const isValid_1 = __importDefault(require("@middlewares/validations/isValid"));
const jwt_1 = require("@middlewares/jwt");
const router = express_1.Router();
const path = '/auth';
router.route(`${path}/user`)
    .post([...user_val_1.userVal(), isValid_1.default], auth_1.createUser);
router.route(`${path}/login`)
    .post([...user_val_1.loginVal(), isValid_1.default], auth_1.getLogin);
router.route(`${path}/token`)
    .get(jwt_1.validarToken, auth_1.renewToken);
exports.default = router;
