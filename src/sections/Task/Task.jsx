import React from 'react'

const TASK_IMG = 'https://th.bing.com/th/id/R.8678b7f87fc5d8859f0c47dbde59c544?rik=QzuS5QUAU203xg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f07%2fround-flat-icon-checklist_180046.png&ehk=swLs0WmqxqrEu7WiLZ8kUzsSjynNIxUWa41sbq8obyc%3d&risl=&pid=ImgRaw&r=0'

import styles from './Task.module.css'

export default function Task({task}) {
  return (
    <section className={styles.Task}>

      <figure className={styles.Task__Figure}>
        <img 
          src={TASK_IMG}
          className={styles.Task__Image}
          alt="What was my task?" />
      </figure>
      
      <article className={styles.Task__Description}>
        <h2 className={styles.Task__Title}>What was my task?</h2>
        <p>{task}</p>
      </article>

    </section>
  )
}