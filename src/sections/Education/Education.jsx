import React from 'react'

import Cert from '../../components/Cert/Cert.jsx'
import { education } from '../../utils/data.js'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section className={styles.Education}>

      <h2 className={styles.Education__Title}>Education and Certifications</h2>

      <section className={styles.Education__List}>
        { education.map( ( edu, i ) => <Cert key={i} {...edu} /> ) }
      </section>

    </section>
  )
}