import React, { useState } from 'react'

import NavLink from '../NavLink/NavLink.jsx'
import menu from '../../assets/icons/icons8-menu-100.png'
import x_icon from '../../assets/icons/icons8-x-96.png'
import styles from './Sidenav.module.css'

export default function Sidenav({ links = [] }) {
  const [ dropdown, setDropdown ] = useState(false)
  const sidebarStyle = (dropdown) ? `${styles.Sidebar} ${styles.Sidebar__Active}` : `${styles.Sidebar}`

  const openSidebar = () => setDropdown(true)
  const closeSidebar = () => setDropdown(false)

  return (
    <>
      <figure className={styles.Sidebar__Button}>
        <img src={menu} alt='menu icon' onClick={ openSidebar } />
      </figure>

      <nav className={sidebarStyle}>

        <section className={styles.Sidebar__Menu}>
          <section>
            <figure className={styles.Sidebar__Button}>
              <img src={x_icon} alt='close icon' onClick={ closeSidebar } />
            </figure>
          </section>
          
          <ul>
            {
              links.map( ( link, i ) => <li key={i}><NavLink {...link}/></li> )
            }
          </ul>
        </section>

        {/* TODO: Place Language options */}

      </nav>
    </>
  )
}
