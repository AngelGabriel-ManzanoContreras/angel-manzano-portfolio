import React from 'react'

import styles from './Tool.module.css'

export default function Tool({ link, name, img, displayTitle = false}) {
  return (
    <article className={styles.Tool}>
      
      <figure className={styles.Tool__Figure}>
        { 
          ( link )
          ? ( 
              <a href={link} target='_blank'>
                <img className={styles.Tool__Image} src={img} alt={name} />
              </a> 
            )
          : ( <img className={styles.Tool__Image} src={img} alt={name} /> )
        }
      </figure>

      { (displayTitle) && ( <p style={styles.Tool__Title}>{name}</p> ) }

    </article>
  )
}