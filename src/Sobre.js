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
      <p className='text-sobre'>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado.</p>
      <div className='sobre_images'>
      <img className='imagens' src={pets1}></img> 
      <img className='imagens' src={pets2}></img> 
      <img className='imagens' src={pets3}></img> 
      </div>
      <footer>
        <a href=''><FaInstagram/></a>
        <a href=''><FaFacebookSquare/></a>
      </footer>
    </div>

  )
}

export default Sobre
