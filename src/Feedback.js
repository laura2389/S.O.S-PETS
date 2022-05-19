import React, { useState } from 'react'
import './style/Feedback.css'

const Feedback = () => {
  return (
    <div className="feedback_page">
      <div id="login">
        <form class="feedback-container">
          <div class="feedback-header">
            <h1>Feedback</h1>
          </div>
          <div class="feedback-content">
            <div class="feedback-content-area">
              <p className="radio-feedbak">
                1. O serviço que você utilizou foi útil para você hoje?
              </p>
              <input type="radio" id="contactChoice1" />
              <label className="radio" for="contactChoice1">
                Sim
              </label>
              <input type="radio" id="contactChoice2" />
              <label className="radio" for="contactChoice2">
                Não
              </label>
              <br />
              <label className="experince-feedback">
                2. O que podemos fazer para melhorar sua experiência?
              </label>
              <input className="input-feedback" type="string" />
              <button class="enviar-feedback">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback
