import React from 'react'

import Me from '../../assets/imgs/angel.jpg'
import styles from './Introduction.module.css'

export default function Introduction() {
  return (
    <section className={styles.Introduction}>

      <figure className={styles.Introduction__Figure}>
        <img className={styles.Introduction__Image} src={Me} alt="Angel Manzano" />
      </figure>
      
      <section className={styles.Introduction__Summary}>
        <h1>Angel Manzano</h1>
        <p>Software developer junior seeking opportunities to gain hands-on experience.
        <br/>Focused on User-centered design, I strive to bring to life innovative solutions.</p>
        <p><i>Front-End Developer - UX/UI Designer</i></p>
      </section>

    </section>
  )
}