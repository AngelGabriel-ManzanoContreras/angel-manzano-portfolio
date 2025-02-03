import { Link } from 'react-router-dom'
import { INavbarItem } from './INavbarItem'

export default function index( { customClassName, onClick, text, href } : INavbarItem ) {
  return (
    <li>
      <a className={ customClassName } href={ href } onClick={ onClick }>{ text }</a>
    </li>
  )
}
