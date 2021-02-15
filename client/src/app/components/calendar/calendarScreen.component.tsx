import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { MessagesCalendar,StylesEventCalendar } from '../../helpers';
import CalendarEvent from './calendarEvent';
import CalendarModal from './calendarModal';
import { ButtonFab } from '../ui'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { eventClearNoteActive, eventSetActiveActions, uiOpenModalAction } from '../../actions';
import { i_events, i_redux } from '../../interfaces';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import DeleteFab from '../ui/deleteFab.component';

moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarScreen = () => {

    const [lastView,setlastView] = useState(localStorage.getItem('lastView') || 'month');

    const dispatch = useDispatch();

    const {events, active} = useSelector((info:i_redux) => info.calendar);

    const eventStyleGetter = () => {
        return { style:StylesEventCalendar };
    }

    const Components = () => {
        return { event: CalendarEvent }
    }

    const onDoubleClick = () => dispatch(uiOpenModalAction());

    const onSelectEvent = (e:i_events) => dispatch(eventSetActiveActions(e));

    const onSelectSlotEvent = () => dispatch(eventClearNoteActive())

    const onViewChange = (view:string) => {
        setlastView(view)
        localStorage.setItem('lastView', view);
    }

    return (
        <div className="calendar-screen">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={MessagesCalendar}
                eventPropGetter={eventStyleGetter as any}
                components={ Components() }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onSelectSlot={ onSelectSlotEvent }
                selectable={ true }
                onView={ onViewChange }
                view={ lastView as any }
            />

            { active && <DeleteFab/> }
            <ButtonFab/>
            <CalendarModal/>
        </div>
    );
};



export default CalendarScreen;