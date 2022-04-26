import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Perfil = () => {
  return (
    <div className="perfil_page">
      <h1>Meu Perfil</h1>
      <p>
        <Link to={'login'}>
          <a className="nav-cadastro">Faça Login</a>
        </Link>
      </p>
      <p>
        <Link to={'cadastro'}>
          <a className="nav-login">Faça Cadastro</a>
        </Link>
      </p>
    </div>
  )
}

export default Perfil
