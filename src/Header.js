import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul className="nav justify-content-left">
        <li className="nav-foto">
          <Link to={'home'}>
            <a className="nav-link">
              <img src="./public/logo_sos-pets"></img>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <ul>
            <li>
              <Link to={'sobre'}>
                <a className="nav-link">SOBRE NÓS</a>
              </Link>
            </li>
            <li>
              <Link to={'feedback'}>
                <a className="nav-link">FEEDBACK</a>
              </Link>
            </li>
            <li>
              <Link to={'footer'}>
                <a className="nav-link">CONTATO</a>
              </Link>
            </li>
            <li>
              <Link to={'adicionar'}>
                <a className="nav-link">icon_add</a>
              </Link>
            </li>
            <li>
              <Link to={'perfil'}>
                <a className="nav-link">icon_user</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Header
