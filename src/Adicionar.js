import React, { useState } from 'react'
import './style/Adicionar.css'

const Adicionar = () => {
  return (
    <div className="adicionar_page">
      <div id="login">
        <form class="adicionar-container">
          <div class="adicionar-header">
            <h1>Cadastre seu pet</h1>
          </div>
          <div class="adicionar-content">
            <div class="adicionar-content-area">
              <p className="type-user">Tipo de Usuario</p>
              <select name="genero">
                <option value="macho">Perdeu</option>
                <option value="femea">Encontrou</option>
              </select>
              <p className="genero">Gênero</p>
              <select name="genero">
                <option value="macho">Macho</option>
                <option value="femea">Fêmea</option>
              </select>
              <label>Peso</label>
              <input type="number" />
              <label>Cor</label>
              <input type="string" />
              <label>Acessorio</label>
              <input type="string" />
            </div>
            <div className="adicionar-content-area">
              <label>Especie</label>
              <input type="string" />
              <label>Condição</label>
              <input type="string" />
              <label>Localização</label>
              <input type="string" />
              <button class="cadastrar">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Adicionar
