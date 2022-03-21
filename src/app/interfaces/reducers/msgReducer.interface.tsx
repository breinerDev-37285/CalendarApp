export interface i_msg_state {
    ok: boolean;
    msg: string;
};


export interface i_msg_action {
    type: string;
    payload?: i_msg_state;
}