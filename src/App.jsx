import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Project from './pages/Project/Project.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectIndex' element={<Project />} />

        <Route path='*' element={<NotFound msg='404: Page Not Found' />} />
      </Routes>
    </Router>
  )
}

export default App