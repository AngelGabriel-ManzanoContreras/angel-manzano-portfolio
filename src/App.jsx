import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
// import Project from './pages/Project/Project.jsx'
// import NotFound from './pages/NotFound/NotFound.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/projects/:projectIndex' element={<Project />} /> */}

        {/* <Route path='*' element={<NotFound msg='404: Page Not Found' />} /> */}
      </Routes>
    </Router>
  )
}

export default App