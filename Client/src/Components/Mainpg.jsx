import React from 'react'
import logo from '../assets/logo.png';
import pin from '../assets/pin.png';
import trend from '../assets/trend.png';
import user from '../assets/user.png';
import website from '../assets/website.png';
import com from '../assets/com.png';
import heart from '../assets/heart.png';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
function Mainpg() {
    const navigate = useNavigate();
    const username = Cookies.get('username');
    
    
    const LogOut = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
          Cookies.remove('token');
          Cookies.remove('username');
          Cookies.remove('userData');
          navigate('/');
        }
      }
    

  return (
    <>
    <div className='flex justify-center content-center' >


    <div  className=' bg-[#FFBC0E] h-lvh text-white w-1/5  ' >

   

    <nav>
                        
                            <div className='logo flex mt-5 justify-center  items-center'>
                                <img className=' w-9 ' src={logo} alt="" />
                               
                                    <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                              
                            </div>
                            <ul className='mt-36 '>
                          
                                <li className='cursor-pointer  flex justify-center items-center ht  text-2xl font-josefin'> <img className="h-10 " src={website} alt="" /><h3 className="ml-3">Portal</h3></li>
                        
                            
                            <li className='cursor-pointer  mt-14 flex justify-center items-center text-2xl   font-josefin'><img className="h-10 " src={trend} alt="" /><h3 className="ml-3">Top-Teir</h3></li>
                            
                            <li className='cursor-pointer  mt-14 flex justify-center items-center text-2xl  font-josefin'><img className="h-10 " src={pin} alt="" /><h3 className="ml-3">Map</h3></li>
                        </ul>
                    </nav>








    </div>


    <div  className=' w-4/5' >

 <nav className=' flex mt-3 justify-around text-center  items-center'>

<input  type="text" placeholder='Search '  className='border-[2px] border-yellow-400 rounded-lg pl-2 w-[30rem] h-10' />
 
 <div className=' w-[9rem] h-9 bg-yellow-400  rounded-lg  flex justify-center text-center cursor-pointer items-center ' onClick={LogOut} ><img  className='h-7 w-10 pl-3' src={user} alt="" /><h5 className=' text-white '>{username}</h5></div>

 <div className='w-14 h-7 bg-yellow-400  rounded-full  '><div className='bg-white w-6 h-6 rounded-full ml-0.5 mt-0.5'></div></div>

 </nav>
 <div className=' h-[35rem] w-[50rem]  overflow-auto ml-12 mt-4 bigdiv '>
 <div className=' w-[45rem] h-[53rem] border-2 shadow-lg  rounded-lg '>


<div className='flex text-center  items-center'> 
    <div className='bg-white w-[2rem] h-[2rem] ml-2 mt-2 rounded-full border-2'></div> 
<h3 className='ml-3 '>User Name</h3>
</div>


<img className='h-[40rem] w-[35rem] pl-10  mt-2' src="https://i.pinimg.com/564x/1b/c0/32/1bc03253f99b62c556a435d3eb68fb3b.jpg" alt="" />

<div className=' flex pl-10 '>

<div><img className='h-5 mr-3 mt-3' src={heart} alt="" /><p className='text-xs'>897</p></div>
<div><img className='h-5 mr-3 mt-3 transform rotate-180' src={heart} alt="" /><p className='text-xs'>12</p></div>
<div><img className='h-5 mr-3 mt-3' src={com} alt="" /><p className='text-xs'>789</p></div>

</div>

<p className='pl-10 '> <b> Spot:</b>City Palace</p>
<p className='pl-10 '> <b>Location:</b>Udaipur,Rajasthan</p>

<p className='h-32 font-light  pl-10'  >the City Palace is a must-see attraction that offers a  glimpse into Rajasthan's regal past. With its stunning architecture, the palace promises an unforgettable experience</p>

</div>







    </div>
    
    </div>


    
    </div>
    </>
  )
}
 
export default Mainpg