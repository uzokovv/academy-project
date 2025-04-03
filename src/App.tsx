import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Navbar from './components/Navbar'
import Portfoli from './pages/Partfoli'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/partfoli' element={<Portfoli/>} />
        <Route path='*/' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App