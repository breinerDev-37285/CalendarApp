import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions';
import { i_redux } from '../../interfaces';

const NabBar = () => {

  const dispatch = useDispatch();
  const { name } = useSelector( (data:i_redux) => data.auth );

  const handleLogout = () => dispatch( startLogout() );
  
  return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span  
            className="navbar-brand" >
            {name}
          </span>
          <div className="d-flex">
              <button 
                className="btn btn-outline-danger" 
                type="button"
                onClick={ handleLogout }
                >
                  <i className="fa fa-sign-out"> </i>
                    Logout
              </button>
          </div>
        </div>
      </nav>
  )
}

export default NabBar;