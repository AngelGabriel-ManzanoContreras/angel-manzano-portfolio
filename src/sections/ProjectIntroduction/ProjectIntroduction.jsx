import React from 'react'

import styles from './ProjectIntroduction.module.css'

export default function ProjectIntroduction({img, title, slogan}) {
  return (
    <section className={styles.ProjectIntroduction}>
      
      <figure className={styles.ProjectIntroduction__Figure}>
        <img className={styles.ProjectIntroduction__Image} src={img} alt={title} />
      </figure>

      <article className={styles.ProjectIntroduction__Summary}>
        <h1 className={styles.ProjectIntroduction__Title}>{title}</h1>
        <h3 className={styles.ProjectIntroduction__Slogan}>{slogan}</h3>
      </article>

    </section>
  )
}