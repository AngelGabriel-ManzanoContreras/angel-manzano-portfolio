import { Link, useLocation } from 'react-router-dom'
import styles from './NavLink.module.css'

export default function NavLink({ route = '/', text = 'Link to' }) {
  const location = useLocation()
  const navLinkStyle = location.pathname === route
    ? `${styles.NavLink} ${styles.NavLink__Active}` : `${styles.NavLink}`

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Link 
      className={ navLinkStyle } 
      to={ route }
      onClick={ handleClick }
    >{ text }</Link>
  )
}
