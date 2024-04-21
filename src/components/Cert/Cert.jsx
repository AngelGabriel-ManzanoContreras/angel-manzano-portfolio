import React from 'react'

import styles from './Cert.module.css'

export default function Cert( { image, cert, org, current, badge, skills } ) {
  return (
    <article className={styles.Cert}>

      <details>
        <summary className={styles.Cert__Summary}>
          <img className={styles.Cert__Image} src={image} alt={cert + ' - ' + org} />
        </summary>

        <article className={styles.Cert__Article}>
          <a href={badge} title={cert + ' - Angel Manzano'} target='_blank'>
            <h2 className={styles.Cert__Title}>{cert}</h2>
          </a>
          <h3 className={styles.Cert__Subtitle} > - {org} { (current) ? '(Current)' : '' }</h3>

          <ul>
            { skills.map( ( skill, i ) => <li key={i}>{skill}</li> ) }
          </ul>
        </article>
      </details>

    </article>
  )
}