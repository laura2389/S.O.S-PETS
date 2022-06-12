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
    const initialState = { feedback: ""}
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
        console.log(formState)
      if (id != null) {
          myaxios.put("/feedback/", formState)
              .then(res => alert("Sugestão enviada com sucesso"));

      } else {
          const formData = new FormData();
          formData.append();
          myaxios.post("/feedback", JSON.stringify(formState))
              .then(res => alert("Sugestão enviada com sucesso"));
      }
    }
 
  return (
    <div className="feedback_page">
      <div id="login">
        <form className="feedback-container">
          <div className="feedback-header">
            <h2>FEEDBACK</h2>
          </div>
          <div className="feedback-content">
            <div className="feedback-content-area">
              <label className="experince-feedback">
                 O que podemos fazer para melhorar <br />sua experiência?
              </label>
              <input className="input-feedback" type="string" name="feedback" onChange={atualizaForm} value={formState.feedback}/>
               <br /><br />
               <label id="label2">Obrigado por usar nosso serviço!</label>
              <div className='enviar'>
              <button onClick={salvaOuAtualiza} className="enviar-feedback">Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
 
export default Feedback
 
