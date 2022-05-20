import { Routes, Route, Outlet } from 'react-router'
import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Feedback from './Feedback'
import Adicionar from './Adicionar'
import Buscar from './Buscar'
import Perfil from './Perfil'
import Login from './Login'
import Cadastro from './Cadastro'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="//adicionar" element={<Adicionar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="//buscar" element={<Buscar />} />
          <Route path="//login" element={<Login />} />
          <Route path="//cadastro" element={<Cadastro />} />
        </Routes>
        <Outlet />
      </main>
    </>
  )
}

export default App
