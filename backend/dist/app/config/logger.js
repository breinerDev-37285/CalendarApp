"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.dateNow = void 0;
const winston_1 = require("winston");
const moment_1 = __importDefault(require("moment"));
const path_1 = require("path");
exports.dateNow = moment_1.default(new Date());
const { Console, File } = winston_1.transports;
const { combine, printf, colorize } = winston_1.format;
exports.log = winston_1.createLogger({
    level: 'debug',
    transports: [
        new Console({
            format: combine(colorize({
                level: true
            }), printf(info => `[${info.level}]: ${info.message} -- ${exports.dateNow.format('dddd, DD/MM/YYYY, HH:mm:ss ')}`))
        }),
        new File({
            filename: path_1.resolve(__dirname, '../logs/debugger.log'),
            format: printf(info => `[${info.level}]: ${info.message} -- ${exports.dateNow.format('dddd, DD/MM/YYYY, HH:mm:ss ')}`)
        })
    ]
});
