"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
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
