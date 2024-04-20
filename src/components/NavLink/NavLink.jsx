import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from './NavLink.module.css'

export default function NavLink({ route = '/', text = 'Link to' }) {
  const location = useLocation()
  const navLinkStyle = location.pathname.includes( route ) 
    ? `${styles.NavLink} ${styles.NavLink__Active}` : `${styles.NavLink}`

  return (
    <Link className={navLinkStyle} to={route}>{text}</Link>
  )
}
