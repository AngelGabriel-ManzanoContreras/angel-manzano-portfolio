import React from 'react'

import styles from './MainButton.module.css'

export default function NormalButton ({ message, onClick } ) {
  return (
    <button className={styles.MainButton} onClick={ onClick }>{message}</button>
  )
}