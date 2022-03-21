import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearNoteActive, uiOpenModalAction } from '../../actions';


const ButtonFab = () => {

    const dispatch = useDispatch();


    const handleInputButton = () => {
        dispatch(eventClearNoteActive());
        dispatch(uiOpenModalAction());
    }

    return (
        <button
            onClick={ handleInputButton } 
            className="btn btn-primary fab">
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
    )
};


export default ButtonFab;