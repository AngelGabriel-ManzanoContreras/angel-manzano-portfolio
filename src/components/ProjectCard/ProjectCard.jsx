import React from 'react'
import { useNavigate } from 'react-router-dom'

import MainButton from '../MainButton/MainButton.jsx'
import styles from './ProjectCard.module.css'

export default function ProjectCard({img, title, url, tools}) {
  const navigate = useNavigate()

  const handleButtonClick = (e) => {
    e.preventDefault()
    navigate(url)
  }

  return (
    <article className={styles.ProjectCard}>

      <figure className={styles.ProjectCard__Figure}>
        <img className={styles.ProjectCard__Image} src={img} alt={title} />
      </figure>
      
      <section className={styles.ProjectCard__Description}>
        <h3 className={styles.ProjectCard__Title}>{title}</h3>
        <p>{tools}</p>

        <MainButton message='View project' onClick={ handleButtonClick } />
      </section>

    </article>
  )
}