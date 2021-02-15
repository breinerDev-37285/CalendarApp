import express, { Application,json,NextFunction,Request,Response,urlencoded } from 'express';
import morgan,{ StreamOptions } from 'morgan';
import path from 'path';
import fs from 'fs';
import { dateNow } from '@config/logger';
import { nextTick } from 'process';
import { Stream } from 'stream';


export default abstract class Server<T,F> {

    protected app:Application;
    protected port:number;
    protected appName:string;

    constructor( port:number,name:string ) {
        this.app = express();
        this.port = port;
        this.appName = name;
        this.onInit();
    }

    private onInit() {
        this.Parser();
        this.log_debug();
        this.log_register();
    }

    private log_debug() {
        this.app.use(morgan('dev'))
    }

    private Parser(){
        this.app.use( json() );
        this.app.use( urlencoded({
            extended:true
        }))
    }

    private log_register() {
    
        let ruta = path.resolve(__dirname, '../logs')

        if (!fs.existsSync(ruta)) {
            fs.mkdirSync(ruta)
        }
        
        morgan.token('date', () => dateNow.format('dddd, DD/MM/YYYY, HH:mm:ss '))
        const format = ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
        morgan.format('personalizado', format);


        this.app.use(morgan('personalizado', { 
            skip: ( req:Request, { statusCode }:Response ) => !(statusCode >= 200 && statusCode < 300),
            stream: fs.createWriteStream(path.join(ruta,'access.log'), { flags: 'a' })
        }));

        this.app.use(morgan('personalizado', { 
            skip: ( req:Request, { statusCode }:Response ) => (statusCode >= 200 && statusCode < 300),
            stream: fs.createWriteStream(path.join(ruta,'error.log'), { flags: 'a' })
        }));
        
    }

    get App(){
        return this.app;
    }

    get Port(){
        return this.port;
    }

    get AppName() {
        return this.appName;
    }

    abstract listening(callback:F):T;

}