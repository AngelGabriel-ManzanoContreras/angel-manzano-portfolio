import React from 'react'

import styles from './Problem.module.css'
const QUESTION_MARK = 'https://www.freepnglogos.com/uploads/question-mark-png/question-mark-png-brooklyn-center-official-website-29.png'

export default function Problem({ problem }) {
  return (
    <section className={styles.Problem}>
      
      <article className={styles.Problem__Description}>
        <h2 className={styles.Problem__Title}>What was the problem?</h2>
        <p>{problem}</p>
      </article>

      <figure className={styles.Problem__Figure}>
        <img className={styles.Problem__Image} 
          src={QUESTION_MARK} 
          alt="What was the problem?" />
      </figure>

    </section>
  )
}