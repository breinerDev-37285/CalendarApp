"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const logger_1 = require("@config/logger");
const morganFormats_1 = __importDefault(require("@helpers/morganFormats"));
class Server {
    constructor(port, name) {
        this.app = express_1.default();
        this.port = port;
        this.appName = name;
        this.morganConfig = morganFormats_1.default.init();
        this.onInit();
    }
    onInit() {
        this.Parser();
        this.Helmet();
        this.log_register();
    }
    Parser() {
        this.app.use(express_1.json());
        this.app.use(express_1.urlencoded({
            extended: true
        }));
        logger_1.log.warn('agregando modulos de parseo de informacion...');
    }
    log_register() {
        this.app.use(morgan_1.default('personalizado', this.morganConfig.accesLog()));
        this.app.use(morgan_1.default('personalizado', this.morganConfig.errorLog()));
    }
    Helmet() {
        this.app.use(helmet_1.default());
    }
    get App() {
        return this.app;
    }
    get Port() {
        return this.port;
    }
    get AppName() {
        return this.appName;
    }
}
exports.default = Server;
