import React from 'react'
import{Route,Routes} from 'react-router-dom'
import About from './Components/About'
import Landingpg from "./Components/Landingpg"
import Review from './Components/Review'
import Mainpg from './Components/Mainpg'



function App() {
  return (
    <Routes>
           <Route path='/' element={<Landingpg/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Review' element={<Review/>}/>
           <Route path='/Mainpg' element={<Mainpg/>}/>

    </Routes>
  )
}

export default App