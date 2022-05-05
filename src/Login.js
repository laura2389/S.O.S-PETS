import React, { useState } from 'react'
import './style/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', { email, password })
  }
  
  return (
    <div className="login_page">
      <form class="form" onSubmit={handleSubmit}>
        <div class="header_login">
          <h2>Login</h2>
        </div>
        <div class="content">
          <div class="content-area">
            <label for="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="content-area">
            <label for="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div class="footer">
          <button class="login">Entrar</button>
          <p>
            Esqueceu a senha? <a href="#">Clique aqui</a>
          </p>
          <button class="login__submit1">Entrar com o Google</button>
        </div>
      </form>
    </div>
  )
}

export default Login
