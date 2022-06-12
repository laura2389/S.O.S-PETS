import React, { useState, useEffect } from 'react'
import myaxios from './myaxios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import './style/Listagem.css'

const Listagem = () => {
  return (
    <div className="content">
      <h2 className="title-listagem">Animais encontrados</h2>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png"
              />
              <Card.Body>
                <Card.Title>
                  Usuário <a className="contato">(Telefone: 19 994849195)</a>
                </Card.Title>
                <Card.Text className="text">
                  <ul>
                    <li>Gênero</li>
                    <li>Porte</li>
                    <li>Cor</li>
                    <li>Espécie</li>
                    <li>Condição do animal</li>
                    <li>Acessório</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Listagem
