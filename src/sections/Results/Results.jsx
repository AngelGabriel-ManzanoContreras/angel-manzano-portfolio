import React from 'react'

import MainButton from '../../components/MainButton/MainButton.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton.jsx'
import styles from './Results.module.css'

export default function Results({ href, proofs, title, uxcase }) {
  
  const goTo = (url) => { window.open(url, '_blank') }

  return (
    <section className={styles.Results}>
      <h2 className={styles.Results__Title}>The final result was...</h2>

      <Carousel list={proofs} title={title} />
      
      <section className={styles.Results__Buttons}>

        { (href) && <MainButton message="View project" onClick={ () => goTo(href) } /> }
        { (uxcase) && <SecondaryButton message={'UX Case'} /> }
        
      </section>

    </section>
  )
}