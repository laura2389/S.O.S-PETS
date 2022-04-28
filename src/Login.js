import React, { useState } from 'react'
import './style/Login.css'

const Login = () => {
  return (
    <div className="login_page">
      <form class="form">
        <div class="header">
          <h2>Login</h2>
        </div>
        <div class="content">
          <div class="content-area">
            <label for="usuario">Usuário</label>
            <input type="text" id="usuario" autocomplete="off" />
          </div>
          <div class="content-area">
            <label for="password">Senha</label>
            <input type="password" id="password" autocomplete="off" />
          </div>
        </div>
        <div class="footer">
          <button class="login__submit">Login</button>
          <a href="#" class="recuperar_senha">
            Esqueceu a senha?
          </a>
          <button class="login__submit2">Entrar com o Facebook</button>
          <button class="login__submit3">Entrar com o Google</button>
        </div>
      </form>
    </div>
  )
}

export default Login
