"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = require("morgan");
const logger_1 = require("@config/logger");
const path_1 = require("path");
const fs_1 = require("fs");
class morganConfig {
    constructor() {
        this.init();
    }
    static init() {
        if (!morganConfig.instace) {
            this.instace = new morganConfig();
        }
        return this.instace;
    }
    init() {
        this.tokens();
        this.formats();
    }
    tokens() {
        morgan_1.token('date', () => logger_1.dateNow.format('dddd, DD/MM/YYYY, HH:mm:ss '));
        morgan_1.token('service', (req, res) => res.get('X-Service'));
    }
    formats() {
        logger_1.log.info('ajustando formato para logs');
        const formato = ':remote-addr - [:date] ":method :url - :service HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent';
        return morgan_1.format('personalizado', formato);
    }
    stream(typeLog) {
        return fs_1.createWriteStream(path_1.join(__dirname, `../logs/${typeLog}`), { flags: 'a' });
    }
    accesLog() {
        logger_1.log.info('generando archivo access.log');
        return {
            skip: (req, { statusCode }) => !(statusCode >= 200 && statusCode < 300),
            stream: this.stream('access.log')
        };
    }
    errorLog() {
        logger_1.log.info('generando archivo error.log');
        return {
            skip: (req, { statusCode }) => (statusCode >= 200 && statusCode < 300),
            stream: this.stream('error.log')
        };
    }
}
exports.default = morganConfig;
