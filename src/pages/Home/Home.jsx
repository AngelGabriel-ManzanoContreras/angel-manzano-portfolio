import React, { useEffect } from 'react'

//import Template from './template'
//import NormalButton from '../components/normalButton'

import styles from './Home.module.css'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Angel Manzano - Portfolio'
  }, [])
  
  return (
  //  <Template current={4}>
  <>
      <section className='home-sect'>
        <section id='home-name-sect'>
          <h1>Angel Manzano</h1>
          <h3>Software Developer</h3>
        </section>
        <section id='home-btn-sect'>
          {/* <NormalButton link={true} text='About me' href='about-me'/>
          <NormalButton link={true} text='Projects' href='projects'/>
          <NormalButton link={true} text='Contact' href='contact'/> */}
        </section>
      </section>
      </>
    //</Template>
  )
}