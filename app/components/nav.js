'use client'

import { useState } from 'react'

import Header from './header'
import Menu from './menu'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleClose() {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleClose={handleClose} />
      <Menu menuOpen={menuOpen} handleClose={handleClose} />
    </>
  )
}