import React from 'react'
import{Route,Routes} from 'react-router-dom'


import Landingpg from "./Components/Landingpg"

function App() {
  return (
    <Routes>
           <Route path='/' element={<Landingpg/>}/>
    </Routes>
  )
}

export default App