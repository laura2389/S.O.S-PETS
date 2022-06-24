import React, { useState, useReducer } from 'react'
import './style/Buscar.css'
import { useNavigate } from 'react-router-dom'
import myaxios from './myaxios'
import ClipLoader from "react-spinners/ClipLoader";
 
const formReducer = (state, action) => {
  switch(action.type){
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
 
const Buscar = () => {
  const navigate = useNavigate();
  const initialState = { porte: "", especie: "", cor: "",  acessorio: "",  condicaoAnimal: "", genero: "" }
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false)
  const [file, setfile] = useState(initialState)
  const {porte, especie, cor, acessorio, condicaoAnimal, genero} = formState
  const pegaValor = (e) => {
    console.log(e.target.value);
  } 
 
  const handleChange = (e) => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    }) 
}
 
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
  const submeter = async (e) => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    }) 
    e.preventDefault();
    const  { porte, especie, cor, acessorio, condicaoAnimal, genero} = formState
    console.log( porte, especie, cor, acessorio, condicaoAnimal, genero )
    const u = new URLSearchParams(formState).toString();
    const resposta = await
    myaxios.get("/animaldomestico/query?" + u)
    setLoading(true);
    await waitFor(1500);
    setLoading(false)
    navigate("/buscar/animaldomestico");
  }
 
  return (
    <div className="buscar_page">
      {!loading ?
      <div id="login">
        <form className="buscar-container">
          <div className="buscar-header">
            <h2>BUSQUE SEU PET</h2>
          </div>
          <div  className="buscar-content">
            <div className="buscar-content-area">
 
              <p  className="Genero" >Gênero</p>
              <select onChange={handleChange} name="genero">
              <option disabled selected value>  Escolha uma opção  </option>
                <option value="Macho">Macho</option>
                <option value="Femea">Fêmea</option>
              </select>
 
              <label >Porte</label>
              <select onChange={handleChange} name="porte">
              <option disabled selected value>  Escolha uma opção  </option>
                <option value="Pequeno">Pequeno</option>
                <option value="Medio">Medio</option>
                <option value="Grande">Grande</option>
              </select>
 
              <label>Cor</label>
              <select onChange={handleChange} name="cor">
                <option disabled selected value>  Escolha uma opção  </option>
                <option value="Preto">Preto</option>
                <option value="Branco">Branco</option>
                <option value="Laranja">Laranja</option>
                <option value="Caramelo">Caramelo</option>
                <option value="Cinza">Cinza</option>
                <option value="Marrom">Marrom</option>
                <option value="Listrado">Listrado</option>
                <option value="Frajola">Frajola</option>
                <option value="Tigrado">Tigrado</option>
                <option value="Pardo">Pardo</option>
                <option value="Bege">Bege</option>
                <option value="Creme">Creme</option>
                <option value="Dourado">Dourado</option>
              </select>
 
             
            </div>
 
            <div className="buscar-content-area">
              <label>Especie</label>
              <select onChange={handleChange} name="especie">
              <option disabled selected value>  Escolha uma opção  </option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Coelho">Coelho</option>
                <option value="Calopsita">Calopsita</option>
                <option value="Cavalo">Cavalo</option>
                <option value="Rato">Rato</option>
                <option value="Hamster">Hamster</option>
                <option value="Papagaio">Papagaio</option>
                <option value="Porco">Porco</option>
                <option value="Cobra">Cobra</option>
              </select>
 
              <label>Condição do Animal</label>
              <select onChange={handleChange} name="condicaoAnimal">
              <option disabled selected value>  Escolha uma opção  </option>
                <option value="Nenhum">Nenhum</option>
                <option value="Prenha">Prenha</option>
                <option value="Machucado">Machucado</option>
                <option value="Aleijado">Aleijado</option>
                <option value="Cego">Cego</option>
                <option value="Outro">Outro</option>
              </select>
             
             <label>Acessorio</label>
              <input  type="string" onChange={handleChange} name="acessorio"/>
 
            </div>
          </div>
          <div className='buscar-aplicar'>
          <button onClick={submeter} className="aplicar">Buscar</button>
          </div>
        </form>
      </div>
      : <ClipLoader color={"blue"} loading={loading}  size={150} />
      }
    </div>
  )
}
 
export default Buscar
