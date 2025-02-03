// "use client";
import useHeader from "./useHeader";

import styles from "./header.module.css";
import menuIcon from "@assets/icons/menu.webp";
import xIcon from "@assets/icons/x.webp";

import WideNavbar from "@components/wide-navbar";
import Navbar from "@components/navbar";

export default function Header() {
  const { menuOpen, handleMenu, mobile } = useHeader();

  return (
    <header className={ styles[`header`] }>

      { mobile && (
        <>
          <div className={ styles[`header__parent-icon`] }>
            <button className={ styles[`header__menu-icon`] } title="Toggle menu">
              <img src={ menuOpen ? xIcon : menuIcon } alt="Menu icon" onClick={ handleMenu } />
            </button>
          </div>
          
          <Navbar menuOpen={ menuOpen } closeMenu={ handleMenu } />
        </>
      ) }

      { !mobile && <WideNavbar /> }

    </header>
  )
}
