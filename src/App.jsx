import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@pages/home'
import Layout from '@pages/Layout'
import Project from '@pages/project'
// import NotFound from './pages/NotFound/NotFound.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout> <Home /> </Layout> } />
        <Route path='/project/:project' element={ <Layout> <Project /> </Layout> } />

        {/* <Route path='*' element={<NotFound msg='404: Page Not Found' />} /> */}
      </Routes>
    </Router>
  )
}

export default App