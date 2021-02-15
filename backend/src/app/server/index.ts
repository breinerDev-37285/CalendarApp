import express, { Application } from 'express';

export default abstract class Server<T,F> {

    protected app:Application;
    protected port:number;
    protected appName:string;

    constructor( port:number,name:string ) {
        this.app = express();
        this.port = port;
        this.appName = name;
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