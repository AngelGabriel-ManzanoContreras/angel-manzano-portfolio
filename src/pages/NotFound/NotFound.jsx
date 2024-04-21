import React, { useEffect } from 'react'

import Layout from '../../components/Layout/Layout'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound({ msg }) {
  useEffect(() => {
    document.title = 'Error | Angel Manzano - Portfolio'
  }, [])

  return (
    <Layout>
      <section className={styles.NotFound}>
        <h1 className={styles.NotFound__Title}>{'Oops :('}</h1>
        <p className={styles.NotFound__Subtitle}>Sorry, it seems something didn't go as expected</p>
        <p className={styles.NotFound__Message}>{msg}</p>

        <Link to='/' className={styles.NotFound__CTA}>Go back to the home page</Link>
      </section>
    </Layout>
  )
}