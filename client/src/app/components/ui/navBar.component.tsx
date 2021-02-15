import React from 'react';

const NabBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span  
              className="navbar-brand" >
              Breiner
            </span>
            <div className="d-flex">
                <button className="btn btn-outline-danger" type="button">
                    <i className="fa fa-sign-out"> </i>
                     Logout
                </button>
            </div>
          </div>
        </nav>
    )
}

export default NabBar;