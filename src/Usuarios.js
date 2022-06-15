import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { FaUser } from 'react-icons/fa'
import './style/Perfil.css'
import Usuario from './Usuario'
import Pagination from 'react-bootstrap/Pagination'
import myaxios from './myaxios'

const Usuarios = () => {
  const [usuarios, setusuarios] = useState(null);
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }


  const baixaUsuarios = () => {
    myaxios.get(`/usuario?page=${curPage}&pageSize=2`)
    .then(response => {
      setusuarios(response.data.usuarios);
      setTotalPages(response.data.totalPages)
      
    })
  }

  useEffect(() => {
    baixaUsuarios();
  }, [])

  let items = [];
  for (let number = 0; number < totalPages; number++) {
    items.push(
      <Pagination.Item onClick={() => {
          setCurPage(number)
          baixaUsuarios();
      }} key={number} active={number === curPage}>
        {number+1}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <h4>
          <FaUser />
        </h4>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <p className='foto-perfil'>
          {' '}
          <div className="foto_area">
            <img
              src="https://avatars.dicebear.com/api/avataaars/23.svg"
              alt=""
              height="44px"
              width="44px"
            ></img>
          </div>
        </p>

        {usuarios != null ? usuarios.map(usuario => (
          <Usuario 
            email={usuario.email}
            nome={usuario.nome} />
        )) : "badawa" }
        <Pagination>
          {items}
        </Pagination>


        <MenuItem onClick={handleClose}>Editar Usuario</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  )
}


export default Usuarios
