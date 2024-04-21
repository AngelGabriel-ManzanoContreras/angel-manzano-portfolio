import React, { useState } from 'react'

import styles from './Carousel.module.css'

export default function Carousel({ list, title }) {
  const [current, setCurrent] = useState(0)
  const [transition, setTransition] = useState( {} )

  const handleMovement = (index) => {
    let segs = ( index > current ) ? index - current : current - index

    setTransition(
      {transform: `translateX(-${index * 100}%)`,
       transition: `${segs}s ease-in-out`}
      )
    setCurrent(index)
  }

  return (
    <section className={styles.Carousel}>

      <figure className={styles.Carousel__Figure}>
        { 
          list.map( (image, i) => 
            <img 
              className={styles.Carousel__Image}
              style={transition} 
              key={i} 
              src={image} 
              alt={title} 
              loading='lazy' /> ) 
        }
      </figure>

      <section className={styles.Carousel__Dashes}>
        { 
          list.map( (img, i) => 
            <div 
              className={`${styles.Carousel__Dash} ${( i === current) && styles.Carousel__Dash_Active}` }
              key={i}
              onClick={() => handleMovement(i)}></div> ) 
        }
      </section>
    
    </section>
  )
}