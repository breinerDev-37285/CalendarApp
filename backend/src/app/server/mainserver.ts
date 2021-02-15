import Server from '@server/index';

export default class ServerMain extends Server<void,Function> {

    private static instance: ServerMain;

    private constructor( port:number,name:string ){
        super( port,name )
    }

    public static init( port:number,name:string ){
        if( !ServerMain.instance ){
            this.instance =  new ServerMain( port,name );
        }
        return this.instance;
    }

    public listening(callback: Function): void {
        this.app.listen( this.port,callback() );
    }

}