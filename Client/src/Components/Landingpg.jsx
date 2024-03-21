import React from 'react'
import logo from '../assets/logo.png';
function Landingpg() {
return (
    <>

        <div className='flex justify-center content-center '>
            <div  className=' bg-[#FFBC0E] h-lvh text-white w-1/2'>


            <nav className="">
      <ul className="flex justify-between items-center">
       <img className=' w-60' src={logo} alt="" />
        <li className="text-white">About</li>
        <li className="text-white">Review</li>
        <li className="text-white">Contact</li>
      </ul>
    </nav>

<div className=' pl-10 mt-60  w-96'>
    <h1 className='text-6xl'>Discover the best with us!</h1>
    <h3>explore  secluded beaches to enchanting temples and cafes for an unforgettable experience.</h3>

</div>

<button className=' ml-10 rounded-md border border-white px-4 py-2 text-white'>Sign Up</button>
<p className=' ml-10 '>Already have an account? Sign in</p>
            </div>



            <div className='h- w-1/2'>
           
   
<div className="bg-cover bg-center h-full" style={{backgroundImage: "url('https://pix8.agoda.net/hotelImages/162/1621491/1621491_16110916030048573424.jpg?ca=6&ce=1&s=1024x768')"}}></div>
            </div>
        </div>
    </>
)
}

export default Landingpg