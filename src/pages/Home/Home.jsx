import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../../components/Layout/Layout.jsx'
import NormalButton from '../../components/MainButton/MainButton.jsx'
import { navbarLinks } from '../../utils/routes.js'

import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const handleButtonClick = (e, route) => {
    e.preventDefault()
    navigate(route)
  }

  useEffect(() => {
    document.title = 'Home | Angel Manzano - Portfolio'
  }, [])
  
  return (
    <Layout>
      <section className={styles.Home}>

        <section className={styles.Home__Introduction}>
          <h1>Angel Manzano</h1>
          <h3>Software Developer</h3>
        </section>

        <section className={styles.Home__Buttons}>
          {navbarLinks.map((link, index) => (
            <NormalButton 
              key={index} 
              message={link.text} 
              onClick={(e) => handleButtonClick(e, link.route)} />
          ))}
        </section>

      </section>
    </Layout>
  )
}
