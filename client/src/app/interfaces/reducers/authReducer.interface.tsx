export interface i_auth_state {
    uid: string;
    name: string;
}

export interface i_auth_action {
    type:string;
    payload: i_auth_state;
}