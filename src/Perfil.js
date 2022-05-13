import React from 'react'
import './style/Perfil.css'
import { Popover } from '@headlessui/react';
import {FaUser} from 'react-icons/fa'

const Perfil = () => {
  return (
    <Popover>
      <Popover.Panel>
        <h1>Hello World</h1>
      </Popover.Panel>
      <Popover.Button className="user">
        <FaUser />
      </Popover.Button>
    </Popover>
  )
}

export default Perfil
