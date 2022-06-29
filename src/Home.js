import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fotohome from './img/foto_tela_home.png'
import './style/Home.css'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="home_page">
      <h1>
        BEM VINDO AO <a className="title">S.O.S PETS</a>
      </h1>
      <h4>
        Aqui você encontra o seu animal perdido com mais<br />
         facilidade
      </h4>
      <div className="btns">
        <button className="button-home">
          <Link to={'buscar'}>
            Busque seu pet <FaArrowRight />
            <i className="BsFillArrowRightSquareFillt"></i>
          </Link>
        </button>
        <button className="button-home">
          <Link to={'adicionar'}>
            Cadastre um pet <FaArrowRight />
            <i className="bi bi-arrow-right"></i>
          </Link>
        </button>
        <p className="cadastrar-se">
          Não possui cadastro?
          <Link to={'cadastro'}>
            <a className="clique-cadastro">Clique aqui</a>
          </Link>
        </p>
        <p className="entrar">
          Já possui conta?{' '}
          <Link to={'login'}>
            <a>Clique aqui</a>
          </Link>
        </p>
      </div>
      <div className="foto_tela_home">
        <a className="img_home">
          <img src={fotohome}></img>
        </a>
      </div>
    </div>
  )
}

export default Home
