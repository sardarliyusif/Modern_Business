import { Route, Routes } from 'react-router-dom'


import {Home , About} from './pages'



import { Navbar , Footer } from './components'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
      

    </div>
  )
}

export default App
