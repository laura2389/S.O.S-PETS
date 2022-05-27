import React, { useState, useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
          return state;
  }
}

const Cadastro = () => {
  const initialState =  { email: "", nome: "", senha: "" }
  const [formState, dispatch] = useReducer(formReducer)
  const [file, setfile] = useState(initialState)
  const { email, nome, senha } = formState

  const handleChange = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }
  const { id } = useParams()

  useEffect(() => {
    if (id != null) {
      myaxios.put(id).then(res => {
        dispatch({
          type: 'INICIALIZA_CAMPOS',
          state: res.data
        })
      })
    }
  }, [])

  const SubmitForm = e => {
    e.preventDefault()

    if (id != null) {
      myaxios
        .put(`auth/register/${id}`, { email, nome, senha }).then(r => {
          localStorage.setItem("token", r.data)})
          console.log({ email, nome, senha })
    } else {
     
      myaxios
        .post('auth/register',  { email, nome, senha }).then(r => {
          localStorage.setItem("token", r.data)})
          console.log({ email, nome, senha })
    }
  }

  return (
    <div className="cadastro_page">
      <form className="form_cadastro">
        <div className="header_cadastro">
          <h2>Cadastre-se</h2>
        </div>
        <div className="content_cadastro">
          <div className="cadastro-area">
            <label for="email">Email</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="email"
              placeholder="Digite seu email"
              value={formState.email}
            />
            <label for="nome">Nome</label>
            <input
              type="text"
              onChange={handleChange}
              id="nome"
              name="nome"
              placeholder="Digite seu primeiro nome"
              value={formState.nome}
            />
          </div>
          <div className="cadastro-area">
            <label for="senha">Senha</label>
            <input
              type="password"
              onChange={handleChange}
              id="senha"
              name="senha"
              placeholder="Crie uma senha"
              value={formState.senha}
            />
            <p>
              Ao criar uma conta, você concorda com os Termos e Condições Uso da
              S.O.S PETS. Para saber como tratamos os seus dados pessoais,
              acesse o nosso Aviso de Privacidade.
            </p>
          </div>
        </div>
        <div className="footer_cadastro">
          <button type="submit" onClick={SubmitForm} className="login__submit">
            Cadastar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
