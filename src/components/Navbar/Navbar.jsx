import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../styles/components/navbar.css'

import menu from '../utils/icons8-menu-100.png'
import x_icon from '../utils/icons8-x-96.png'

export default function Navbar( { page } ) {
  const [ active, setActive ] = useState(0)
  const [ dropdown, setDropdown ] = useState(false)

  if ( page !== undefined && page !== active ) setActive(page)

  const handleActive = ( btn ) => {
    if (btn === active) return 'linkOff activeL'
    else return 'linkOff'
  }

  const links = [
    <Link to={'/about-me'} className={handleActive(1)} onClick={() => setActive(1)} >About me</Link>,
    <Link to={'/projects'} className={handleActive(2)} onClick={() => setActive(2)} >Projects</Link>,
    <Link to={'/contact'} className={handleActive(3)} onClick={() => setActive(3)} >Contact</Link>
  ]

  return (
    <>
      <header className='navbar'>
        <h2>
          <Link to={'/'}>Angel Manzano</Link>
        </h2>

        <nav className='main-nav'>
          {
            links.map( ( linkItem, i ) => <span key={i}>{linkItem}</span> )
          }
        </nav>

        <figure className='dropdown-btn'>
          <img src={menu} alt='icon' onClick={ () => setDropdown(true) } />
        </figure>

      </header>

      <nav className={ (dropdown) ? 'sidebar s-active' : 'sidebar' }>
        <section>
          <figure>
            <img src={x_icon} alt='icon' onClick={ () => setDropdown(false) } />
          </figure>
        </section>
        <ul>
          <li>
            <Link to={'/'} className={handleActive(4)} onClick={() => setActive(4)} >Home</Link>
          </li>
          {
            links.map( ( linkItem, i ) => <li key={i}>{linkItem}</li> )
          }
        </ul>
      </nav>
    </>
  )
}
