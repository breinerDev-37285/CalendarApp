export interface i_ui_state {
    modalOpen: boolean
}

export interface i_ui_action {
    type: string;
    payload?: i_ui_state;
}
