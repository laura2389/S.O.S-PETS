import React, { useState } from 'react'

const Login = () => {
  return (
    <div className="login_page">
      <h1><br></br></h1>
      <div id="login">
        <form class="card">
          <div class="card-header">
            <h2>Login</h2>
          </div>
          <div class="card-content">
            <div class="card-content-area">
              <label for="usuario">Usuário</label>
              <input type="text" id="usuario" autocomplete="off" />
            </div>
            <div class="card-content-area">
              <label for="password">Senha</label>
              <input type="password" id="password" autocomplete="off" />
            </div>
          </div>
          <div class="card-footer">
            <button class="login__submit">Login</button>
            <a href="#" class="recuperar_senha">
              Esqueceu a senha?
            </a>
            <button class="login__submit2">Entrar com o Facebook</button>
            <button class="login__submit3">Entrar com o Google</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
