import { i_ui_state } from './reducers/uiReducer.interface';
import { i_auth_state } from './reducers/authReducer.interface';
import { i_calendar_state } from './reducers/calendarReducer.interface';
import { i_msg_state } from './reducers/msgReducer.interface';

interface i_redux {
    auth: i_auth_state;
    ui: i_ui_state;
    calendar: i_calendar_state;
    errorMsg: i_msg_state;
};

export default  i_redux;