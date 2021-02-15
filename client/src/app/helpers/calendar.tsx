import { i_form,i_eventValidationForm } from '../interfaces';
import moment from 'moment';

export const MessagesCalendar = {
    allDay: 'Todo el día',
    previous: '<',
    next: '>',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No hay eventos en este rango',
    showMore: (total:any) => `+ Ver más (${total})`
}

export const StylesEventCalendar = {
    backgroundColor: '#367cf7',
    borderRadius: '0px',
    opacity: 0.8,
    display: 'block',
    color: 'white'
}


export const customStylesModal = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};


export const eventValidationForm = ({start,end,title,note}:i_form):i_eventValidationForm => {

    let res: i_eventValidationForm = {
        state: true,
        message: ''
    };

    const momentStart = moment( start );
    const momentEnd = moment( end );

    if( momentStart.isSameOrAfter(momentEnd) ){
        res = {
            state: false,
            message: 'la fecha de finalización debe ser mayor a la fecha de inicio'
        };
    }else if ( title.trim().length <= 0 ){
        res = {
            state: false,
            message: 'el titulo no puede estar vacio'
        };
    }else if ( note.trim().length <= 0 ){
        res = {
            state: false,
            message: 'la nota no debe estar vacia'
        };
    };

    return res;
}