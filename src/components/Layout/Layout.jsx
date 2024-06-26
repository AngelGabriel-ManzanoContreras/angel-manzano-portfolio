import React from 'react'

import Header from '../Header/Header'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <section className={styles.Layout}>
      <Header/>
      {children}
    </section>
  )
}