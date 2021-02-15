import express, { Application,json,urlencoded } from 'express';
import morgan from 'morgan';
import path from 'path';


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
        this.log_debug();
        this.Parser();
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