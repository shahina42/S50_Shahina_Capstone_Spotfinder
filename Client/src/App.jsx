import React from 'react'
import{Route,Routes} from 'react-router-dom'
import About from './Components/About'
import Landingpg from "./Components/Landingpg"
import Review from './Components/Review'
import Mainpg from './Components/Mainpg'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Contacts from './Components/Contacts'


function App() {
  return (
    <Routes>
           <Route path='/' element={<Landingpg/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Review' element={<Review/>}/>
           <Route path='/Mainpg' element={<Mainpg/>}/>
           <Route path='/SignUp' element={<SignUp/>}/>
           <Route path='/SignIn' element={<SignIn/>}/>
           <Route path='/Contacts' element={<Contacts/>}/>
    </Routes>
  )
}

export default App