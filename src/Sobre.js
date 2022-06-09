import React, { useState } from 'react'
import pets1 from './img/pets1.jpg'
import pets2 from './img/pets2.jpg'
import pets3 from './img/pets3.jpg'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

import './style/Sobre.css'

const Sobre = () => {
  return (
    <div className="sobre_page">
      <h1 className="title-sobre">SOBRE NÓS</h1>
      <p className='text-sobre'>O S.O.S Pets surgiu trazendo como objetivo ajudar os tutores a encontrar seus respectivos pets. A ideia surgiu como uma forma de tentar diminuir a quantidade de animais das ruas e facilitar a busca deles. Através de um sistema web, os usuários poderão cadastrar seus animais perdidos e abandonar os velhos hábitos dos cartazes de papel.</p>
      <div className='sobre_images'>
      <img className='imagens' src={pets1}></img> 
      <img className='imagens' src={pets2}></img> 
      <img className='imagens' src={pets3}></img> 
      </div>
      <footer className='redes-redes'>
        <a className='redes' href=''><FaInstagram/></a>
        <a className='redes' href=''><FaFacebookSquare/></a>
      </footer>
    </div>

  )
}

export default Sobre
