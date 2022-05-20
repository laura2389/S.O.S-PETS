import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { FaUser } from 'react-icons/fa'
import './style/Perfil.css'

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
        <p className='email-perfil'>renata@gmail.com</p>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  )
}
