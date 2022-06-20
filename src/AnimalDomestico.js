 import React, { useState, useEffect } from 'react'
 import Col from 'react-bootstrap/Col'
 import Card from 'react-bootstrap/Card'
 import PropTypes from 'prop-types'
 
 const AnimalDomestico = props => {
 return (
    <div className="content">
      <h2 className="title-listagem">Animais encontrados</h2>
          <Col>
            <Card className="card">
        <Card.Img variant="top" 
        src={"http://10.1.9.6:38000/fotoAnimal/" + props.fotoAnimal}  alt="Card image cap"/>
              <Card.Body>
                <Card.Title>{props.tipoUsuario} <a className="contato">{props.telefone}</a>
                </Card.Title>
                <Card.Text className="text">
                  <ul>
                    <li>{props.genero}</li>
                    <li>{props.porte}</li>
                    <li>{props.cor}</li>
                    <li>{props.especie}</li>
                    <li>{props.condicaoAnimal}</li>
                    <li>{props.acessorio}</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </div>
  )
}

AnimalDomestico.propTypes = {

}

export default AnimalDomestico