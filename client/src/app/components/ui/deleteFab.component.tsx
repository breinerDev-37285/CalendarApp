import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventDeleteActions } from '../../actions';
import { i_redux } from '../../interfaces';

const DeleteFab = () => {

    const dispatch = useDispatch();
    const { active } = useSelector((info:i_redux) => info.calendar);
    
    const handleDeleteEvent = () => active && dispatch(eventDeleteActions(active))

    return (
        <button
            className="btn btn-danger fab fab-danger"
            onClick={ handleDeleteEvent }
        >
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    )
};


export default DeleteFab;