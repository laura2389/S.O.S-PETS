import React, { useState } from 'react'
import bootstrap from 'bootstrap'
import { Link } from 'react-router-dom'

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
      <a className="nav-link">
        <img src="./public/foto_home"></img>
      </a>
    </div>
  )
}

export default Home
