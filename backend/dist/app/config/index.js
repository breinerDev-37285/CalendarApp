"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const fs_1 = require("fs");
dotenv_1.config({
    path: '.env'
});
const { NODE_ENV } = process.env;
switch (NODE_ENV) {
    case 'development':
        dotenv_1.config({ path: '.env.development' });
        break;
    case 'production':
        dotenv_1.config({ path: '.env.production' });
        break;
    case 'testing':
        dotenv_1.config({ path: '.env.testing' });
        break;
    default:
        throw new Error('No se encontro un ambiente valido');
}
;
const path = path_1.resolve(__dirname, '../logs');
if (!fs_1.existsSync(path)) {
    fs_1.mkdirSync(path);
}
