import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const AnimalDomestico = props => {
  return (
    <div className="content">
      <h2 className="title-listagem" style={{color: '#FD6D12'}}>Animais encontrados</h2>
      <CardGroup>
        <Card style={{ height: '600px' }}>
          <Card.Img
            style={{ height: '300px' }}
            variant="top"
            src="https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg?cs=srgb&dl=pexels-pixabay-59965.jpg&fm=jpg"
          />
          <Card.Body>
            <Card.Title>
              Localizador <a className="contato">(19) 993900278</a>
            </Card.Title>
            <Card.Text className="text">
              <ul>
                <li>Macho</li>
                <li>Pequeno</li>
                <li>Preto</li>
                <li>Cachorro</li>
                <li>Nenhuma</li>
                <li>Nenhum</li>
                <li>Proximo ao Parque da Criança</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ height: '600px' }}>
          <Card.Img
            style={{ height: '300px' }}
            variant="top"
            src="https://i.pinimg.com/564x/ed/14/d1/ed14d1939bf88bcfd7bfa2e5ead71329.jpg"
          />
          <Card.Body>
            <Card.Title>
              Dono <a className="contato">(19) 993900278</a>
            </Card.Title>
            <Card.Text className="text">
              <ul>
                <li>Macho</li>
                <li>Pequeno</li>
                <li>Preto</li>
                <li>Cachorro</li>
                <li>Nenhuma</li>
                <li>Nenhum</li>
                <li>Visto por ultimo ao Cristo Morada do Sol</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ height: '600px' }}>
          <Card.Img
            style={{ height: '300px' }}
            variant="top"
            src="https://i.pinimg.com/564x/12/ea/46/12ea463446914fef3c2cb074e6f9c5fe.jpg"
          />
          <Card.Body>
            <Card.Title>
              Localizador <a className="contato">(19) 99624050</a>
            </Card.Title>
            <Card.Text className="text">
              <ul>
                <li>Macho</li>
                <li>Pequeno</li>
                <li>Preto</li>
                <li>Cachorro</li>
                <li>Nenhuma</li>
                <li>Nenhum</li>
                <li>Proximo ao Parque Temático</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default AnimalDomestico