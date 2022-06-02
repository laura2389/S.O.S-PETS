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
      myaxios.put('http://localhost:38000/' + id).then(res => {
        dispatch({
          type: 'INICIALIZA_CAMPOS',
          state: res.data
        })
      })
    }
  }, [])

  const submitForm = e => {
    let url = 'http://localhost:38000/animaldomestico'
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

  function favTutorial() {
    let mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }

  return (
    <div className="adicionar_page">
      <div id="login">
        <form className="adicionar-container">
          <div className="adicionar-header">
            <h2>CADASTRE UM PET</h2>
          </div>
          <div className="adicionar-content">
            <div className="adicionar-content-area">
              <label htmlFor="tipoUsuario">Tipo de Usuario</label>
              <select id = "myList" onchange = "favTutorial()" >
                <option value="Dono"> Dono</option>
                <option value="Localizador"> Localizador </option>
                </select>
              <label htmlFor="genero">Gênero</label>
              <select id = "genero" onchange = "favTutorial()" >
                <option> Macho </option>
                <option> Femea </option>
                </select>
              <label htmlFor="porte">Porte</label>
              <select id = "myList" onchange = "favTutorial()" >
                <option> Pequeno </option>
                <option> Medio </option>
                <option> Grande </option>
                </select>
              <label htmlFor="cor">Cor</label>
              <select id = "myList" onchange = "favTutorial()" >
                <option> Preto</option>
                <option> Branco </option>
                <option> Laranja </option>
                <option> Caramelo </option>
                <option> Cinza </option>
                <option> Marrom </option>
                <option> Listrado </option>
                <option> Frajola </option>
                <option> Tigrado </option>
                <option> Pardo </option>
                <option> Bege </option>
                <option> Creme </option>
                </select>
              <label htmlFor="acessorio">Acessorio</label>
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
              <label htmlFor="especie">Especie</label>
              <select id = "myList" onchange = "favTutorial()" >
                <option> Papagaio </option>
                <option> Hamster </option>
                <option> Rato </option>
                <option> Cavalo </option>
                <option> Calopsita </option>
                <option> Cachorro </option>
                <option> Gato </option>
                <option> Coelho </option>
                <option> Porco </option>
                <option> Cobra</option>
                </select>
              <label htmlFor="condição">Condição</label>
              <select id = "myList" onchange = "favTutorial()" >
                <option> Prenha </option>
                <option> Machucado </option>
                <option> Aleijado </option>
                <option> Cego </option>
                <option> Nenhum </option>
                <option> Outro </option>
                </select>
              <label htmlFor="localização">Localização</label>
              <input
                type="string"
                onChange={handleChange}
                id="localização"
                name="localização"
                placeholder="ex: Rua Pedro Villo"
                value={formState.localização}
              />
              <label htmlFor="animalImage">Adicione Foto do Pet</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="form-control"
                name="animalImage"
                id="animalImage"
                aria-describedby="helpId"
              />
              <button className="cadastrar">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Adicionar
