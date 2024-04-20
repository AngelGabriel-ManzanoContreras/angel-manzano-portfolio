import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Contact from './pages/Contact/Contact.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-me' element={<AboutMe />} />
        {/*
        <Route path='/projects' element={<Projects />}>
          <Route index element={<ProjectList />} />
          <Route path=':project' element={<Project />} />
        </Route>

        <Route path='*' element={<ErrorPage msg='404: Page Not Found' />} /> */}
      </Routes>
    </Router>
  )
}

export default App