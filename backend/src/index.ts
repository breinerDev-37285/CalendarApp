import '@config/index';
import Database from '@database/index';

const database = Database.init();

database.Connect()
    .then(() => console.log('se conecto'))
    .catch(console.log)