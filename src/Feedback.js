import React, {useState, useReducer, useEffect} from 'react'
import './style/Feedback.css'
import { useParams } from 'react-router'
import myaxios from './myaxios'
 
const fnReducer = (state, action) => {
    switch(action.type){
      case "ATUALIZA":
        return {...state, [action.name]: action.value} 
        
      case "CARREGA":
        return action.state; 
        
      default:
        return state;  
    }
}
 
const Feedback = () => {
 
    const initialState = {  feedback: ""}
    const [formState, dispatch] = useReducer(fnReducer, initialState)
    const {id} = useParams();
    const atualizaForm = (e) => {
      dispatch({
        type: "ATUALIZA",
        name: e.target.name,
        value: e.target.value
      })
    }
 
    const salvaOuAtualiza = (e) => {
  
      e.preventDefault();
        myaxios.post("/feedback/", formState
        ).then(r => r.data())
    }
 
  return (
    <div className="feedback_page">
      <div id="login">
        <form class="feedback-container">
          <div class="feedback-header">
            <h2>FEEDBACK</h2>
          </div>
          <div class="feedback-content">
            <div class="feedback-content-area">
              <label className="experince-feedback">
                 O que podemos fazer para melhorar <br />sua experiência?
              </label>
              <input className="input-feedback" type="string" name="feedback" onChange={atualizaForm} value={formState.feedback}/>
               <br /><br />
               <label id="label2">Obrigado por usar nosso serviço!</label>
              <div className='enviar'>
              <button onClick={salvaOuAtualiza} class="enviar-feedback">Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
 
export default Feedback
 
