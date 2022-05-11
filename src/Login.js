import React, { useState, useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style/Login.css'
import { reduxLogin } from './actions'

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

const Login = props => {
  const initialState = { email: '', senha: '' }
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [file, setfile] = useState(initialState)
  const handleChange = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const responseGoogle = async response => {
    console.log(response)
    const googleToken = response.tokenId
    const fcmToken = props.token
    dispatch(await reduxLogin({ googleToken, fcmToken }))
  }

  const { id } = useParams()

  const handleImageChange = e => {
    setfile(e.target.files[0])
  }

  useEffect(() => {
    if (id != null) {
      fetch('http://localhost:8080/usuario/' + id)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: 'INICIALIZA_CAMPOS',
            state: data
          })
        })
    }
  }, [])

  return (
    <div className="login_page">
      <form class="form">
        <div class="header_login">
          <h2>Login</h2>
        </div>
        <div class="content">
          <div class="content-area">
            <label for="usuario">Usuário</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="email"
              placeholder="Digite seu email"
              value={formState.email}
            />
          </div>
          <div class="content-area">
            <label for="password">Senha</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={formState.senha}
            />
          </div>
        </div>
        <div class="footer">
          <button class="login">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
