import React, { useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import myaxios from './myaxios'
import './style/Cadastro.css'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ATUALIZA':
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}

const Cadastro = () => {
  const navigate = useNavigate()
  const initialState = { email: '', nome: '', telefone: '', password: '' }
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [file, setfile] = useState(initialState)

  const handleChange = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const submitForm = async e => {
    e.preventDefault()
    const { email, nome, telefone, password } = formState
    const resposta = await myaxios.post('/auth/register', { email, password })
    navigate('/login')
  }

  return (
    <div className="cadastro_page">
      <form className="form_cadastro">
        <div className="header_cadastro">
          <h2>Cadastre-se</h2>
        </div>
        <div className="content_cadastro">
          <div className="cadastro-area">
            <label htmlFor="usuario">Email</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="email"
              placeholder="Digite seu email"
              value={formState.email}
            />
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              onChange={handleChange}
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={formState.nome}
            />
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              onChange={handleChange}
              id="telefone"
              name="telefone"
              placeholder="Digite seu telefone"
              value={formState.telefone}
            />
          </div>
          <div className="cadastro-area">
            <label htmlFor="password">password</label>
            <input
              type="password"
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="Crie uma senha"
              value={formState.password}
            />
            <p>
              Ao criar uma conta, você concorda com os Termos e Condições Uso da
              S.O.S PETS. Para saber como tratamos os seus dados pessoais,
              acesse o nosso Aviso de Privacidade.
            </p>
          </div>
        </div>
        <div className="footer_cadastro">
          <button type="submit" onClick={submitForm} className="login__submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro