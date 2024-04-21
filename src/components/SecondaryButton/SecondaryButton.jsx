import React from 'react'

import styles from './SecondaryButton.module.css'

export default function SecondaryButton({ onClick = ( () => {} ), message }) {
  return <button className={styles.SecondaryButton} onClick={ onClick }>{message}</button>
}