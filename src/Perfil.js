import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { FaUser } from 'react-icons/fa'
import './style/Perfil.css'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import myaxios from './myaxios'
import { async } from 'q'

const FadeMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [user, setUser] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const getPerfil = async e => {
    const myUser = await myaxios.get('/usuario/usuario/own')
    setUser(myUser.data)
  }

  React.useEffect(() => {
    getPerfil()
  }, [])

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <h4 className="perfil">
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
        <p className="email-perfil">{user != null ? user.user.email : ''}</p>
        <Link className="postagens" to={'minhaspostagens'}>
          <MenuItem>Minhas Postagens</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  )
}

export default FadeMenu
