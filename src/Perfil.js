import React from 'react'
import './style/Perfil.css'
import { Popover } from '@headlessui/react';
import {FaUser} from 'react-icons/fa'

const Perfil = () => {
  return (
    <Popover>
      <Popover.Panel>
      </Popover.Panel>
      <Popover.Button className="user">
        <h5><FaUser /></h5>
      </Popover.Button>
    </Popover>
  )
}

export default Perfil