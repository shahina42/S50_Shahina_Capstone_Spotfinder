import React from 'react'
import logo from '../assets/logo.png';
import pin from '../assets/pin.png';
import trend from '../assets/trend.png';
import user from '../assets/user.png';
import website from '../assets/website.png';
import com from '../assets/com.png';
import heart from '../assets/heart.png';
function Mainpg() {
  return (
    <>
    <div className='flex justify-center content-center' >


    <div  className=' bg-[#FFBC0E] h-lvh text-white w-1/4  ' >

   

    <nav>
                        
                            <div className='logo flex mt-5 justify-center  items-center'>
                                <img className=' w-9 ' src={logo} alt="" />
                               
                                    <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                              
                            </div>
                            <ul className='mt-36 '>
                          
                                <li className='cursor-pointer  flex justify-center items-center ht  text-2xl mr-42 font-josefin'> <img className="h-10 " src={website} alt="" /><h3 className="ml-3">Portal</h3></li>
                        
                            
                            <li className='cursor-pointer  mt-14 flex justify-center items-center text-2xl   font-josefin'><img className="h-10 " src={trend} alt="" /><h3 className="ml-3">Top-Teir</h3></li>
                            
                            <li className='cursor-pointer  mt-14 flex justify-center items-center text-2xl  font-josefin'><img className="h-10 " src={pin} alt="" /><h3 className="ml-3">Map</h3></li>
                        </ul>
                    </nav>








    </div>


    <div  className=' w-3/4' >

 <nav className=' flex mt-5  justify-around text-center  items-center'>

<input  type="text" placeholder='Search '  className='border-[3px] border-yellow-400 rounded-lg w-[30rem] h-12' />
 
 <div className=' w-40 h-12 bg-yellow-400  rounded-lg  flex justify-center text-center  items-center '><img  className='h-10' src={user} alt="" /><h5 className=' text-white'>User Name</h5></div>

 <div className='w-24 h-9 bg-yellow-400  rounded-full  '><div className='bg-white w-8 h-8 rounded-full ml-0.5 mt-0.5'></div></div>

 </nav>

 <div className=' w-[30rem] h-[37rem] border-[3px] border-yellow-400 ml-56 mt-5 shadow-lg  shadow-yellow-400/40 rounded-lg '>


<div className='flex text-center  items-center'> 
    <div className='bg-white w-[3rem] h-[3rem] ml-2 mt-2 rounded-full border-2'></div> 
<h3 className='ml-3 text-xl'>User name</h3>
</div>


<img className='h-80  pl-10  mt-2' src="https://i.pinimg.com/564x/1b/c0/32/1bc03253f99b62c556a435d3eb68fb3b.jpg" alt="" />

<div className=' flex pl-10 '>

<div><img className='h-6 mr-3 mt-3' src={heart} alt="" /><p>897</p></div>
<div><img className='h-6 mr-3 mt-3 transform rotate-180' src={heart} alt="" />12<p></p></div>
<div><img className='h-6 mr-3 mt-3' src={com} alt="" /><p>789</p></div>

</div>

<p className='pl-10 '> <b> Spot:</b>City Palace</p>
<p className='pl-10 '> <b>Location:</b>Udaipur,Rajasthan</p>

<p className='h-32 font-light  pl-10'  >the City Palace is a must-see attraction that offers a  glimpse into Rajasthan's regal past. With its stunning architecture, the palace promises an unforgettable experience</p>

</div>

    </div>
    



    
    </div>
    </>
  )
}
 
export default Mainpg