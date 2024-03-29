import React from 'react'
import bg from '../assets/bg.png';



function SignIn() {
  return (
    <>
    
    
     <div className="bg-cover h-screen flex justify-center items-center " style={{ backgroundImage: `url(${bg})` }}>



<div className=' h-[25rem] w-[25rem]  bg-white rounded-md '>

<h2 className=' text-4xl text-black mt-4  ml-32  font-semibold'>Sign In</h2><br />

<input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Name'/><br />
<input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Password'/><br />

<button className=' bg-yellow-400 w-32 py-2 px-4 text-white rounded-md ml-32 hover:bg-black'>Submit</button>

</div>

     </div>
    
    
    </>
  )
}

export default SignIn