import React, { useState, useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style/Login.css'
import { reduxLogin } from './actions'
import myaxios from './myaxios'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ATUALIZA':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'INICIALIZA_CAMPOS':
      return { ...action.state }
    default:
      return state
  }
}

const Login = () => {
  const initialState =  { email: "", senha: "" }
  const [formState, dispatch] = useReducer(formReducer, initialState)

  const handleChange = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const { id } = useParams()

  const { email, senha } = formState;

  useEffect(() => {
    if (id != null) {
      myaxios.post("/usuario", {email, senha}).then(r => {
        localStorage.setItem("token", r.data)
      })
      console.log({email, senha})
    }
  }, [])

  return (
    <div className="login_page">
      <form className="form">
        <div className="header_login">
          <h2>Login</h2>
        </div>
        <div className="content">
          <div className="content-area">
            <label htmlFor="usuario">Email</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="email"
              placeholder="Digite seu email"
              value={formState.email}
            />
          </div>
          <div className="content-area">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              onChange={handleChange}
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
              value={formState.senha}
            />
          </div>
        </div>
        <div className="footer">
          <button className="login">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
