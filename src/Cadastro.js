import React, { useState } from 'react'
import './style/Cadastro.css'

const Cadastro = () => {
  return (
    <div className="cadastro_page">
      <form class="form">
        <div class="header">
          <h2>Cadastre-se</h2>
        </div>
        <div class="content">
          <div class="content-area">
            <label for="usuario">Email</label>
            <input type="text" id="usuario" autocomplete="off" />
            <label for="usuario">Primeiro nome</label>
            <input type="text" id="usuario" autocomplete="off" />
            <label for="usuario">Sobrenome</label>
            <input type="text" id="usuario" autocomplete="off" />
            <label for="usuario">Celular</label>
            <input type="text" id="usuario" autocomplete="off" />
          </div>
          <div class="content-area">
            <label for="password">Senha</label>
            <input type="password" id="password" autocomplete="off" />
            <p>
              Ao criar uma conta, você concorda com os Termos e Condições Uso da
              S.O.S PETS. Para saber como tratamos os seus dados pessoais,
              acesse o nosso Aviso de Privacidade.
            </p>
          </div>
        </div>
        <div class="footer">
          <button class="login__submit">Cadastar</button>
          <button class="login__submit2">Entrar com o Facebook</button>
          <button class="login__submit3">Entrar com o Google</button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
