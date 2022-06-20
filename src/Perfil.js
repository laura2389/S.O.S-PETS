import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { FaUser } from 'react-icons/fa'
import './style/Perfil.css'
import { Link } from 'react-router-dom'

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        <p className="foto-perfil">
          {' '}
          <div className="foto_area">
            <img
              src="https://avatars.dicebear.com/api/avataaars/cabelo.svg?r=45&scale=106&hairColor[]=black"
              alt=""
              height="44px"
              width="44px"
            ></img>
          </div>
        </p>
        <p className="email-perfil">daniel@gmail.com</p>
        <p className="telefone">Telefone: (19) 94849195</p>
        <Link className="postagens" to={'minhaspostagens'}>
          <MenuItem>Minhas Postagens</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  )
}
