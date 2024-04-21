import React from 'react'

import styles from './Tools.module.css'
import Icon from '../../components/Icon/Icon'

export default function Tools({ tools }) {
  return (
    <section className={styles.Tools}>
      <h2>Tools used</h2>
      
      <section className={styles.Tools__List}>
        {tools.map( (tool, i) => <Icon displayTitle={true} key={i} {...tool} /> ) }
      </section>

    </section>
  )
}