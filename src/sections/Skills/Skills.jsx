import React from 'react'

import Icon from '../../components/Icon/Icon.jsx'
import styles from './Skills.module.css'
import { skills } from '../../utils/data.js'

const SkillsSect = () => {
  return (
    <section className={styles.Skills}>

      <h2 className={styles.Skills__Title}>Skills</h2>

      <section className={styles.Skills__Showcase}>

        <details className={styles.Skills__Container}>
          <summary><h3>Professional</h3></summary>

          <article className={styles.Skills__List}>
            {
              skills.professional.map(
                (skill, i) => 
                <Icon 
                  key={i} 
                  displayTitle={true}
                  {...skill} 
                /> )
            }
          </article>

        </details>

        <details className={styles.Skills__Container}>
          <summary><h3>Technical</h3></summary>
          
          <article className={styles.Skills__List}>
            {
              skills.technical.map(
                (skill, i) => 
                <Icon 
                  key={i}
                  displayTitle={true}
                  {...skill}
                />)
            }
          </article>

        </details>
      </section>

    </section>
  )
}

export default SkillsSect