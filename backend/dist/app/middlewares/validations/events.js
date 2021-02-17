"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventVal = void 0;
const isValid_1 = require("./isValid");
const eventVal = () => [
    isValid_1.titleVal(),
    isValid_1.start(),
    isValid_1.end()
];
exports.eventVal = eventVal;
