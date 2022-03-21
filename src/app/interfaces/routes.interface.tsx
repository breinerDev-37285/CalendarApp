interface i_route {
    Component:Function;
    path:string;
    exact?:boolean;
    isAuthenticated:boolean;
}


export default i_route;