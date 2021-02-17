"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mainserver_1 = __importDefault(require("@server/mainserver"));
const logger_1 = require("@config/logger");
const { PORT, APP_NAME, NODE_ENV } = process.env;
const server = mainserver_1.default.init(Number(PORT), String(APP_NAME));
server.listening(() => logger_1.log.info(`Escuchando app ${server.AppName} en el puerto ${server.Port} en modo '${NODE_ENV}'`));
