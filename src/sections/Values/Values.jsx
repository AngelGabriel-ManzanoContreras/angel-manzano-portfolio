import React from 'react'

import Value from '../../components/Value/Value.jsx'
import { values } from '../../utils/data'
import styles from './Values.module.css'

export default function Values() {
  return (
    <section className={styles.Values}>
      <h2 className={styles.Values__Title}>What are the things I value?</h2>

      <section className={styles.Values__Container}>
        { values.map( (value, i) => <Value key={i} {...value} /> )}
      </section>
    </section>
  )
}