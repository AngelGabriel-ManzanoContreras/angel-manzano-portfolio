import React, { useEffect } from 'react'

import Layout from '../../components/Layout/Layout.jsx'
import Introduction from '../../sections/Introduction/Introduction.jsx'
import Values from '../../sections/Values/Values.jsx'
import Skills from '../../sections/Skills/Skills.jsx'
import Education from '../../sections/Education/Education.jsx'
import Contact from '../Contact/Contact.jsx'

export default function AboutMe() {
  useEffect(() => {
    document.title = 'About Me | Angel Manzano - Portfolio'
  }, [])

  return (// By some reason, when there are two (or more) components, an overflow shows up
    <Layout>
      <Introduction />

      <Values />

      <Skills />

      <Education />

      <Contact />
    </Layout>
  )
}