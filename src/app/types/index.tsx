const types = {
    uiOpenModal: '[UI] open modal',
    uiCloseModal: '[UI] close modal',

    authLogin: '[Auth] login',
    authFinishChecking: '[Auth] finish cheking login state',
    authStartTokenRenew: '[Auth] token renew',
    authLogout: '[Auth] logout',

    msgError: '[MSG] set Error',
    msgDelError: '[MSG] del Error',

    eventAddNew: '[Event] Add new event',
    eventSetActive: '[Event] Active event',
    eventClearActive: '[Event] Clear Active event',
    eventUpdate: '[Event] update event',
    eventDelete: '[Event] delete event',
}


export default types;