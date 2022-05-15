import React from 'react'
import './style/Perfil.css'
import { FaUser } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'

const Perfil = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="user">
        <h5>
          <FaUser />
        </h5>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className="foto_perfil">
          <div className="foto_area">
            <img
              src="https://avatars.dicebear.com/api/avataaars/23.svg"
              alt=""
              height="44px"
              width="44px"
            ></img>
            <br></br>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="email_perfil">
          <p className="perfil">renata@gmail.com</p>
        </Dropdown.Item>
        <Dropdown.Item href="">Sair</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Perfil
