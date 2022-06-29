import React, { useState } from 'react'
import pets1 from './img/foto_sobrenós_1.jpeg'
import pets2 from './img/foto_sobrenós_2.jpeg'
import pets3 from './img/foto_sobrenós_3.jpeg'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

import './style/Sobre.css'

const Sobre = () => {
  return (
    <div className="sobre_page">
      <h1 className="title-sobre">SOBRE NÓS</h1>
      <p className='text-sobre'>Sabe quando você está andando na rua e encontra aquele cartaz de que algum animal está perdido? Não sei vocês mas a primeira coisa que nosso grupo pensa é: "Nossa ainda fazem isso?". Atualmente ainda vemos muitos animaizinhos perdidos pelas ruas, e com a intenção de ajudá-los - e também de facilitar a busca dos donos por eles -, criamos o S.O.S Pets, que tem como principal objetivo ajudar pessoas de Indaiatuba na hora de fazer essa busca, deste modo, abandonando os velhos hábitos de pregar cartazes de papel por aí.<br /> Nossos grupo é composto por 3 desenvolvedores Frontend: Laura Beatriz, Vinícius Mendonça e Heloísa dos Santos.<br /> Os desenvolvedores Backend: Henrique Costa e Daniel Corazza.<br /> E nossa dupla responsável pelo Banco de Dados e Documentação: Ketlyn Moreira e Isadora Oliveira.<br /><b>BEM VINDOS AO S.O.S PETS!</b></p>
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
