import NavLink from '../NavLink/NavLink'

import styles from './Navbar.module.css'

export default function Navbar({ links = [] }) {
  return (
    <nav className={styles.Navbar}>
      {
        links.map( ( link, i ) => <span key={i}><NavLink {...link} /></span> )
      }
    </nav>
  )
}
