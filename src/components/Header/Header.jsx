import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar.jsx'
import Sidenav from '../Sidenav/Sidenav.jsx'
import styles from './Header.module.css'
import { navbarLinks, sidebarLinks } from '../../utils/routes.js'

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <h2>
          <Link to={'/'}>Angel Manzano</Link>
        </h2>

        <Navbar links={navbarLinks} />

        <Sidenav links={sidebarLinks} />
        
      </header>
    </>
  )
}
