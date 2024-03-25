import React from 'react'
import{Route,Routes} from 'react-router-dom'
import About from './Components/About'
import Landingpg from "./Components/Landingpg"
import Review from './Components/Review'
import Slider from './Components/Slider'

function App() {
  return (
    <Routes>
           <Route path='/' element={<Landingpg/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Review' element={<Review/>}/>

    </Routes>
  )
}

export default App