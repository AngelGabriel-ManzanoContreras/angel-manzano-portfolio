import React, { useEffect } from 'react'

import Layout from '../../components/Layout/Layout.jsx'
import Icon from '../../components/Icon/Icon.jsx'

import styles from './Contact.module.css'
import { profiles } from '../../utils/data.js'

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Angel Manzano - Portfolio'
  }, [])

  return (
    <Layout>
      <section className={styles.Contact}>

        <section className={styles.Contact__Header}>
          <h1>Reach me out</h1>
        </section>
        
        <section className={styles.Contact__Icons}>
          {
            profiles.map( ( profile, i ) => 
            <Icon
              key={i}
              {...profile}
            />
            )
          }
        </section>
        
      </section>
    </Layout>
  )
}

export default Contact