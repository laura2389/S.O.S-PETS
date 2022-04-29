import React from 'react'
import { Link } from 'react-router-dom'
import logosos from './img/logo_sos-pets2.png'
import './style/Header.css'

const Header = () => {
  return (
    <nav className='cabecalho'>
      <Link to={'home'}><a className="foto_logo"><img src={logosos}></img></a></Link>
        <div className='navegacao'>
          <Link to={'sobre'}><a className="nav-link">SOBRE NÓS</a></Link>
          <Link to={'feedback'}><a className="nav-link">FEEDBACK</a></Link>
          <Link to={'footer'}><a className="nav-link">CONTATO</a></Link>
          <Link to={'adicionar'}><a className="nav-link">icon_add</a></Link>
          <Link to={'perfil'}><a className="nav-link">icon_user</a></Link>
        </div>
    </nav>
  )
}

export default Header
