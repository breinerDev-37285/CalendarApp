"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@server/index"));
const index_2 = __importDefault(require("@routes/index"));
const logger_1 = require("@config/logger");
class ServerMain extends index_1.default {
    constructor(port, name) {
        super(port, name);
        this.init();
    }
    init() {
        this.app.use('/api/v1/', index_2.default);
        logger_1.log.warn('cargando rutas de auth...');
    }
    static init(port, name) {
        if (!ServerMain.instance) {
            this.instance = new ServerMain(port, name);
            logger_1.log.info('inicializando servidor...');
        }
        else {
            logger_1.log.warn('Servidor ya ha sido inicializado');
        }
        return this.instance;
    }
    listening(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = ServerMain;
