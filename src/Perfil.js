import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/Perfil.css'

const Perfil = () => {
  return (
    <div className="perfil_page">
      <h1>Meu Perfil</h1>
      <div className="header">
        <img
          className="foto_perfil"
          src="https://avatars.dicebear.com/api/avataaars/23.svg"
          alt=""
          height="64px"
          width="64px"
        />
      </div>
    </div>
  )
}

export default Perfil
