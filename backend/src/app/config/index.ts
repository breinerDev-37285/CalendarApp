import { config } from 'dotenv';

config({
    path: '.env'
});

const { NODE_ENV } = process.env;

switch( NODE_ENV ){
    case 'development':
        config({path: '.env.development'})
        break
    case 'production':
        config({path:'.env.production'})
        break;
    case 'testing':
        config({path:'.env.testing'})
        break;
    default:
        throw new Error('No se encontro un ambiente valido')
};