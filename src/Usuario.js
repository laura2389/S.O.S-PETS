
 import React, { useState, useEffect } from 'react'
 import PropTypes from 'prop-types'
 
 const Usuario = props => {
 return (
    <div className="card">
    <div className="card-body">
        <p className="card-title">{props.nome}</p>
        <p className="card-text">{props.email}</p>
    </div>
    
</div>
 )  
 }
Usuario.propTypes = {

}

export default Usuario