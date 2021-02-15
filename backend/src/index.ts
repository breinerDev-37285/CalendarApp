import '@config/index';
import Database from '@database/index';

const database = Database.init();

database.Connect()
    .then(() => console.log('conexion a la base de datos establecida'))
    .then(() => import('@app'))
    .catch(console.log)