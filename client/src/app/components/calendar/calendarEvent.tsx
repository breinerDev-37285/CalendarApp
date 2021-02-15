import React from 'react';

const CalendarEvent = ({event}:any) => {
    
    const { title,user:{ name } } = event;

    return (
        <div>
            <span>{title}</span>
            <span> - {name}</span>
        </div>
    )
};

export default CalendarEvent;