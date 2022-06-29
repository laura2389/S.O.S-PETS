import React, { useState, useReducer, useEffect } from 'react'
import './style/Feedback.css'
import { useParams } from 'react-router'
import myaxios from './myaxios'

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

const Feedback = () => {
  const initialState = { sujestao: '' }
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const atualizaForm = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const { id } = useParams()

  useEffect(() => {
    if (id != null) {
      myaxios.put('/feedback/' + id).then(res => {
        dispatch({
          type: 'INICIALIZA_CAMPOS',
          state: res.data
        })
      })
    }
  }, [])

  const salvaOuAtualiza = e => {
    e.preventDefault()
    const { sujestao } = formState
    const respostaFeedback = myaxios.post("/feedback", {sujestao}).then(res => alert("Feedback Enviado!"))
    console.log({sujestao})
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
                O que podemos fazer para melhorar <br />
                sua experiência?
              </label>
              <label htmlFor="sujestao"></label>
              <input
              className="input-feedback"
                type="string"
                onChange={atualizaForm}
                id="sujestao"
                name="sujestao"
                placeholder="Seu Feedback:"
                value={formState.sujestao}
              />
              <br />
              <br />
              <label id="label2">Obrigado por usar nosso serviço!</label>
              <div className="enviar">
                <button onClick={salvaOuAtualiza} className="enviar-feedback">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback
