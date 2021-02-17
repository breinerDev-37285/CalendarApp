"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userVal = exports.loginVal = void 0;
const isValid_1 = require("./isValid");
const loginVal = () => {
    return [
        isValid_1.emailVal(),
        isValid_1.passwordVal()
    ];
};
exports.loginVal = loginVal;
const userVal = () => {
    return [
        isValid_1.emailVal(),
        isValid_1.passwordVal(),
        isValid_1.usernameVal()
    ];
};
exports.userVal = userVal;
