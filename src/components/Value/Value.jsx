import React from 'react'

import styles from './Value.module.css'

export default function Value({ value, image, comment }) {
  return (
    <article className={styles.Value}>

      <details>

        <summary className={styles.Value__Summary}>
        
          <figure className={styles.Value__Figure}>
            <img className={styles.Value__Image} src={image} alt={value} />
            <figcaption>
              <h3>{value}</h3>
            </figcaption>
          </figure>
        
        </summary>
        
        <p>{comment}</p>

      </details>

    </article>
  )
}