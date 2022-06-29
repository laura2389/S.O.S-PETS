import React, { useState, useEffect } from 'react'
import myaxios from './myaxios'
import AnimalDomestico from './AnimalDomestico'
import Pagination from 'react-bootstrap/Pagination'
import './style/Listagem.css'
import {useSelector} from 'react-redux'

const Listagem = () => {
  const animaisDomesticosBusca = useSelector((state) => state.animaisDomesticos)
  const [animais, setanimais] = useState(null);
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const listaPet = () => {
    myaxios.get(`/animais?page=${curPage}&pageSize=2`)
    .then(response => {
        setanimais(response.data.animais);
        setTotalPages(response.data.totalPages)
    });
}

useEffect(() => {
  listaPet();
}, [])

let items = [];
for (let number = 0; number < totalPages; number++) {
  items.push(
    <Pagination.Item onClick={() => {
        setCurPage(number)
        listaPet();
    }} key={number} active={number === curPage}>
      {number+1}
    </Pagination.Item>,
  );
}

  return (
    <div>
      {animaisDomesticosBusca != null ? animaisDomesticosBusca.map(AnimalDomestico => (
        <AnimalDomestico 
          genero={AnimalDomestico.genero} 
          porte={AnimalDomestico.porte}
          cor={AnimalDomestico.cor}
          especie={AnimalDomestico.porte}
          condicaoAnimal={AnimalDomestico.condicaoAnimal}
          acessorio={AnimalDomestico.acessorio}
          fotoAnimal={AnimalDomestico.fotoAnimal}  />
        )) : 
        animais != null ? animais.map(AnimalDomestico => (
          <AnimalDomestico 
            genero={AnimalDomestico.genero} 
            porte={AnimalDomestico.porte}
            cor={AnimalDomestico.cor}
            especie={AnimalDomestico.porte}
            condicaoAnimal={AnimalDomestico.condicaoAnimal}
            acessorio={AnimalDomestico.acessorio}
            fotoAnimal={AnimalDomestico.fotoAnimal}  />
          )) : "Nenhum animal encontrado" }
        }
        <Pagination>
        {items}
        </Pagination>
    </div>
  )
}

export default Listagem
