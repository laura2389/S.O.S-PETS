import React from 'react'
import './style/Feedback.css'

const Feedback = () => {
  return (
    <div className="feedback_page">
      <div id="login">
        <form class="feedback-container">
          <div class="feedback-header">
            <h2>FEEDBACK</h2>
          </div>
          <div class="feedback-content">
            <div class="feedback-content-area">
              <p className="radio-feedbak">
                1. O serviço que você utilizou foi útil para você hoje?
              </p>
              <input className='input' type="radio" name="avaliacao" value="sim"/> Sim
              <input className='input' type="radio" name="avaliacao" value="nao"/> Não
              <br />
              <label className="experince-feedback">
                2. O que podemos fazer para melhorar sua experiência?
              </label>
              <input className="input-feedback" type="string" />
              <div className='enviar'>
              <button class="enviar-feedback">Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback
