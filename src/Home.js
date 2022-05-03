import React, { useState } from 'react'
import { IconName } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import fotohome from './img/foto_home.png'
import './style/Home.css'

const Home = () => {
  return (
    <div className="home_page">
      <h1>
        BEM VINDO AO <a className="title">SOS PETS</a>
      </h1>
      <h4>
        Aqui você encontra o seu animal perdido com <br />
        mais facilidade
      </h4>
      <div className="btns">
        <button><Link to={'buscar'}>Busque seu pet <i className="BsFillArrowRightSquareFillt"></i></Link></button>
        <button><Link to={'adicionar'}>Cadastre seu pet perdido<i className="bi bi-arrow-right"></i></Link></button>
        <p className='cadastrar-se'>Não possui cadastro? <Link to={'cadastro'}><a>Clique aqui</a></Link></p>
      </div>
      <div className="foto_home">
        <a className="img_home">
          <img src={fotohome}></img>
        </a>
      </div>
    </div>
  )
}

export default Home
