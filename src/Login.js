import React, { useState, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style/Login.css'
import { reduxLogin } from './actions'
import myaxios from './myaxios'
import ClipLoader from "react-spinners/ClipLoader";

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

const Login = () => {
  const navigate = useNavigate();
  const initialState =  { email: "", password: "" }
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

  const submitForm = async (e) => {
    e.preventDefault()
    
   console.log(formState)
      const resposta = await myaxios
        .post('/auth/login',  formState );
        console.log(resposta.data.token)
        localStorage.setItem("token", resposta.data.token)
        setLoading(true);
        await waitFor(1500);
        setLoading(false)
        navigate("/");
  }

  return (
   
    <div className="login_page">
       {!loading  ? 
      <form className="form">
        <div className="header_login">
          <h2>Login</h2>
        </div>
        <div className="content">
          <div className="content-area">
            <label htmlFor="usuario">Email</label>
            <input
              type="text"
              onChange={handleChange}
              id="usuario"
              name="email"
              placeholder="Digite seu email"
              value={formState.email}
            />
          </div>
          <div className="content-area">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={formState.password}
            />
          </div>
        </div>
        <div className="footer">
          <button onClick={submitForm} className="login">Entrar</button>
        </div>
      </form>
       : <ClipLoader color={"blue"} loading={loading}  size={150} />
      }
    </div>
  )
}

export default Login
