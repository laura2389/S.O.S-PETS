import React, { useState } from 'react'
import './style/Buscar.css'

const Buscar = () => {
  return (
    <div className="buscar_page">
      <div id="login">
        <form class="buscar-container">
          <div class="buscar-header">
            <h1>Busque por um pet</h1>
          </div>
          <div class="buscar-content">rkdfipjfuoh2 b3rf0813 rn18032fi

          4kf i423jhig]4ifg
           02i
           0g2i 
           40gfiu
           9fguv2
           fu23
           9 
            <div class="buscar-content-area">
              <p className="genero">Gênero</p>
              <select name="genero">
                <option value="macho">Macho</option>
                <option value="femea">Femea</option>
              </select>
              <label>Peso</label>
              <input type="number" />
              <label>Cor</label>
              <input type="string" />
              <label>Acessorio</label>
              <input type="string" />
              <label>Especie</label>
              <input type="string" />
            </div>
            <div className="buscar-content-area">
              <label>Condição</label>
              <input type="string" />
              <label>Localização</label>
              <input type="string" />
              <button class="aplicar">Buscar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Buscar
