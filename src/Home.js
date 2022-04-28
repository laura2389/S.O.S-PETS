import React, { useState } from 'react'
import bootstrap from 'bootstrap'
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
      <button>
        <Link to={'buscar'}>
          Busque seu pet<i className="bi bi-arrow-right"></i>
        </Link>
      </button>
      <div className='foto_home'>
      <a className="img_home">
        <img src={fotohome}></img>
      </a>
      </div>
    </div>
  )
}

export default Home
