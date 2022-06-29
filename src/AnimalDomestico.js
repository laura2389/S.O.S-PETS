
 import React, { useState, useEffect } from 'react'
 import Col from 'react-bootstrap/Col'
 import Card from 'react-bootstrap/Card'
 import PropTypes from 'prop-types'
 
 const AnimalDomestico = props => {
 return (
    <div className="content">
      <h2 className="title-listagem">Animais encontrados</h2>
          <Col>
            <div className="card">
            <img style={{width: 150}} className="card-img-top" src={`${process.env.REACT_APP_HOST || "http://localhost:38000"}/fotoAnimal/${props.fotoAnimal}`}  alt="Card image cap"/>
            <div className="card-body">
            <h4 className="card-title">{props.tipoUsuario}</h4> <h3 className="contato">{}</h3>
                <div className="text">
                  <ul>
                    <li>{props.genero}</li>
                    <li>{props.porte}</li>
                    <li>{props.cor}</li>
                    <li>{props.especie}</li>
                    <li>{props.condicaoAnimal}</li>
                    <li>{props.acessorio}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          </div>
  )
}

AnimalDomestico.propTypes = {

}

export default AnimalDomestico