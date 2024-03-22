import React from 'react'
import{Route,Routes} from 'react-router-dom'
import About from './Components/About'
import Landingpg from "./Components/Landingpg"

function App() {
  return (
    <Routes>
           <Route path='/' element={<Landingpg/>}/>
           <Route path='/About' element={<About/>}/>
    </Routes>
  )
}

export default App