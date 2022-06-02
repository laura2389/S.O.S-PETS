import React, { useState, useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import myaxios from './myaxios'
import './style/Adicionar.css'

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
const Adicionar = () => {
  const initialState = {
    tipoUsuario: '',
    genero: '',
    porte: '',
    cor: '',
    acessorio: '',
    especie: '',
    condição: '',
    localização: '',
    animalImage: ''
  }
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [file, setfile] = useState(initialState)
  const handleChange = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }
  const { id } = useParams()

  const handleImageChange = e => {
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
    let url = 'http://localhost:8080/auth/register/cadastrapet'
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
    <div className="adicionar_page">
      <div id="login">
        <form class="adicionar-container">
          <div class="adicionar-header">
            <h2>CADASTRE UM PET</h2>
          </div>
          <div class="adicionar-content">
            <div class="adicionar-content-area">
              <label for="tipoUsuario">Tipo de Usuario</label>
              <input
                type="string"
                onChange={handleChange}
                id="tipoUsuario"
                name="tipoUsuario"
                placeholder="ex: perdeu ou encontrou"
                value={formState.tipoUsuario}
              />
              <label for="genero">Gênero</label>
              <input
                type="string"
                onChange={handleChange}
                id="genero"
                name="genero"
                placeholder="ex: macho ou fêmea"
                value={formState.genero}
              />
              <label for="porte">Porte</label>
              <input
                type="string"
                onChange={handleChange}
                id="porte"
                name="porte"
                placeholder="ex: pequeno, medio ou grande"
                value={formState.porte}
              />
              <label for="cor">Cor</label>
              <input
                type="string"
                onChange={handleChange}
                id="cor"
                name="cor"
                placeholder="ex: marrom"
                value={formState.cor}
              />
              <label for="acessorio">Acessorio</label>
              <input
                type="string"
                onChange={handleChange}
                id="acessorio"
                name="acessorio"
                placeholder="ex: coleira rosa"
                value={formState.acessorio}
              />
            </div>
            <div className="adicionar-content-area">
              <label for="especie">Especie</label>
              <input
                type="string"
                onChange={handleChange}
                id="especie"
                name="especie"
                placeholder="ex: cachorro"
                value={formState.especie}
              />
              <label for="condição">Condição</label>
              <input
                type="string"
                onChange={handleChange}
                id="condição"
                name="condição"
                placeholder="ex: pata enfaixada"
                value={formState.condição}
              />
              <label for="localização">Localização</label>
              <input
                type="string"
                onChange={handleChange}
                id="localização"
                name="localização"
                placeholder="ex: Rua Pedro Villo"
                value={formState.localização}
              />
              <label for="animalImage">Adicione Foto do Pet</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="form-control"
                name="animalImage"
                id="animalImage"
                aria-describedby="helpId"
              />
              <button class="cadastrar">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Adicionar
