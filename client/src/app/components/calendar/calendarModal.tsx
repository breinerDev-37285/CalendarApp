import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Modal,{ setAppElement } from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import { customStylesModal } from '../../helpers';
import { useForm } from '../../hooks';
import { i_form, i_redux } from '../../interfaces';
import { eventValidationForm } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { uiCloseModalAction,eventAddNewActions, eventClearNoteActive, eventUpdateActions } from '../../actions';

setAppElement('#root')
const now = moment().minutes(0).seconds(0).add(1,'hours');
const end = now.clone().add(1,'hours');


const CalendarModal = () => {
    
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(end.toDate());
    const dispatch = useDispatch();

    const { modalOpen } = useSelector((info:i_redux) => info.ui);
    const { active } = useSelector((info:i_redux) => info.calendar);
    
    const init:i_form = {
        id: new Date().getTime().toString(),
        title: '',
        note: '',
        start: dateStart,
        end: dateEnd,
        user: {
            uid: '',
            name:''
        }
    };

    const [ valuesForm, handleInputChange, setFormValues,reset ] = useForm(init);
    const valuesFormType:i_form = valuesForm;

    const { title, note } = valuesFormType;

    
    const handleInputSubmit = (e:Event) => {
        e.preventDefault();

        
        const { state:stateForm, message:msgErrForm } = eventValidationForm( valuesFormType );

        console.log(stateForm)
        
        if( stateForm ){
            if( active ){
                dispatch(eventUpdateActions(valuesFormType))
            } else {
                dispatch(eventAddNewActions(valuesFormType));
            }
            
            closeModal();
        } else {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msgErrForm
            });
        }
        
    }
   
    const closeModal = () => {
        dispatch(uiCloseModalAction());
        dispatch(eventClearNoteActive());
        reset();
    };


    useEffect(() => {
        if(active){
            setFormValues( active )
        }else{
            reset();
        }
    },[ active,setFormValues ]);

    const onChangeStartDate = (e:Date) => {
        setDateStart(e);
        setFormValues({
            ...valuesFormType,
            start: e
        });
    }

    const onChangeEndDate = (e:Date) => {
        setDateEnd(e);
        setFormValues({
            ...valuesFormType,
            end: e
        });
    }

    return (
        <Modal
            isOpen={ modalOpen }
            onRequestClose={ closeModal }
            style={ customStylesModal }
            closeTimeoutMS={ 200 } 
            className='modal'
            overlayClassName='modal-fondo'
        >
            <h1>{ active? 'Editar Evento' : 'Nuevo Evento' }</h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleInputSubmit as any }    
            >

                <div className="form-group">
                    <label>Fecha y hora de inicio</label>
                    <DateTimePicker
                        onChange={ onChangeStartDate }
                        value={ dateStart }
                        minDate={ new Date() }
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                <label>Fecha y hora de finalizacion</label>
                    <DateTimePicker
                        onChange={ onChangeEndDate }
                        value={ dateEnd }
                        minDate={ dateStart }
                        className='form-control'
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea  
                        className="form-control"
                        placeholder="Notas"
                        rows={5}
                        name="note"
                        value={ note }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="fas fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
};

export default CalendarModal;