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
            return state;
  }
}

const Adicionar = () => {
  const initialState =  { tipoUsuario: '',
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
 const handleChange = (e) => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const { id } = useParams();

  const handleImageChange = (e) => {
    setfile(e.target.files[0])
  }

  useEffect(() => {
    if (id != null) {
        myaxios.put("/animaldomestico/" + id)

            .then(res => {
                dispatch({
                    type: 'INICIALIZA_CAMPOS',
                    state: res.data
                })
            })
    }
}, [])

  const petRegister = async (e) => {
    e.preventDefault();
        console.log(formState)
        if (id != null) {
            myaxios.put("/animaldomestico" + id, formState)
                .then(res => alert("Pet cadastrado com sucesso"));

        } else {
            const formData = new FormData();
            formData.append();
            myaxios.post("/animaldomestico", JSON.stringify(formState))
                .then(res => alert("Pet cadastrado com sucesso"));
        }

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
              <select onChange={handleChange} name="tipoUsuario">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Dono"> Dono</option>
                <option value="Localizador"> Localizador </option>
                </select>
              <label htmlFor="genero">Gênero</label>
              <select onChange={handleChange} name="genero">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Macho"> Macho </option>
                <option value="Femea"> Femea </option>
                </select>
              <label htmlFor="porte">Porte</label>
              <select onChange={handleChange} name="porte">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Pequeno"> Pequeno </option>
                <option value="Medio"> Medio </option>
                <option value="Grande"> Grande </option>
                </select>
              <label htmlFor="cor">Cor</label>
              <select onChange={handleChange} name="cor">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Preto"> Preto</option>
                <option value="Branco"> Branco </option>
                <option value="Laranja"> Laranja </option>
                <option value="Caramelo"> Caramelo </option>
                <option value="Cinza"> Cinza </option>
                <option value="Marrom"> Marrom </option>
                <option value="Listrado"> Listrado </option>
                <option value="Frajola"> Frajola </option>
                <option value="Tigrado"> Tigrado </option>
                <option value="Pardo"> Pardo </option>
                <option value="Bege"> Bege </option>
                <option value="Creme"> Creme </option>
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
              <select onChange={handleChange} name="especie">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Papagaio"> Papagaio </option>
                <option value="Hamster"> Hamster </option>
                <option value="Rato"> Rato </option>
                <option value="Cavalo"> Cavalo </option>
                <option value="Calopsita"> Calopsita </option>
                <option value="Cachorro"> Cachorro </option>
                <option value="Gato"> Gato </option>
                <option value="Coelho"> Coelho </option>
                <option value="Porco"> Porco </option>
                <option value="Cobra"> Cobra</option>
                </select>
              <label htmlFor="condição">Condição</label>
              <select onChange={handleChange} name="condição">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Prenha"> Prenha </option>
                <option value="Machucado"> Machucado </option>
                <option value="Aleijado"> Aleijado </option>
                <option value="Cego"> Cego </option>
                <option value="Nenhum"> Nenhum </option>
                <option value="Outro"> Outro </option>
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
              <button onClick={petRegister} className="cadastrar">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Adicionar
