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
    case 'INICIALIZA_CAMPOS':
      return { ...action.state }
    default:
      return state
  }
}
const Cadastro = () => {
  const initialState = { email: '', primeiroNome: '', sobrenome: '', senha: '', profileImage: ""}
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [file, setfile] = useState(initialState)
  const handleChange = (e) => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }
  const { id } = useParams()

  const handleImageChange = (e) => {
    setfile(e.target.files[0])
  }

  useEffect(() => {
    if (id != null) {
      myaxios.put('http://localhost:8080/' + id).then(res => {
        dispatch({
          type: 'INICIALIZA_CAMPOS',
          state: res.data
        })
      })
    }
  }, [])

  const submitForm = (e) => {
    let url = 'http://localhost:8080/auth/register'
    e.preventDefault()
    console.log(formState)

    if (id != null) {
      url += '/' + id
      myaxios
        .put(url, formState)
        .then(res => alert('Dados enviados com sucesso'))
    } else {
      const formData = new FormData()
      formData.append('usuario', JSON.stringify(formState))
      formData.append('foto', file)
      myaxios
        .post(url, formData)
        .then(res => alert('Dados enviados com sucesso'))
    }
  }

  return (
    <div className="cadastro_page">
      <form class="form_cadastro">
        <div class="header_cadastro">
          <h2>Cadastre-se</h2>
        </div>
        <div class="content_cadastro">
          <div class="cadastro-area">
            <label for="usuario">Email</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="email"
              placeholder="Digite seu email"
              value={formState.email}
            />
            <label for="usuario">Primeiro nome</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="primeiroNome"
              placeholder="Digite seu primeiro nome"
              value={formState.primeiroNome}
            />
            <label for="usuario">Sobrenome</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="sobrenome"
              placeholder="Digite seu sobrenome"
              value={formState.sobrenome}
            />
          </div>
          <div class="cadastro-area">
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
        <div class="footer_cadastro">
          <button type="submit" onClick={submitForm} className="login__submit">
            Cadastar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
