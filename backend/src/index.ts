import '@config/index';
import Database from '@database/index';
import Server from '@server/mainServer';



const database = Database.init();


database.Connect()
    .then(() => console.log('database conectada'))
    .then(() => {
        const { APP_NAME,PORT } = process.env;
        const server = Server.init(Number(PORT), String(APP_NAME));
        const { NameApp, Port } = server;

        server.listening(() => console.log(`listening ${NameApp} on port ${Port}`));
    })
    .catch((err) => { throw new Error(err)});
