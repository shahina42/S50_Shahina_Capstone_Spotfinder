import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Landingpg() {
    return (
        <>

            <div className='flex justify-center content-center '>




                <div className=' bg-[#FFBC0E] h-lvh text-white w-1/2'>

                    <nav>
                        <ul className='flex  pt-2 justify-around  items-center text-xl text-white'>
                            <div className='logo flex   items-center'>
                                <img className=' w-9 ' src={logo} alt="" />
                                <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                            </div>

                            <Link to='/About'>
                                <li className='cursor-pointer  font-josefin'>About</li>
                            </Link>

                        </ul>
                    </nav>


                    <div className='description flex  pl-6 mt-28 '>
                        <div className=' border-2  h-80 border-white'></div>
                        <div className=' '><h2 className='pl-2 mb-2 w-96 text-6xl font-bold  font-josefin'>Discove the best with us!</h2>
                            <h4 className='w-96 mb-5 pl-2 text-2xl  font-josefin font-light'>explore  secluded beaches to enchanting temples and cafes for an unforgettable experience.</h4>
                            <button className='ml-2 text-2xl border-2 border-white h-11 text-white rounded-lg  w-32 hover:bg-white hover:text-yellow-400  font-josefin'>Sign Up</button>
                            <p className='pl-2 pt-2  font-josefin' >Already have an account? <u className=' hover:cursor-pointer  font-josefin'> Sign In</u></p>
                        </div>
                    </div>

                </div>



                <div className='h- w-1/2'>


                    <div className=" h-full" style={{ backgroundImage: "url('https://pix8.agoda.net/hotelImages/162/1621491/1621491_16110916030048573424.jpg?ca=6&ce=1&s=1024x768')" }}>

                        <nav>
                            <ul className='flex justify-around pt-4 items-center text-xl text-white'>

                                <li className='cursor-pointer  font-josefin'>Review</li>
                                <li className='cursor-pointer  font-josefin'>Contact</li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Landingpg