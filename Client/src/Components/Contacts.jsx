import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import email from '../assets/email.png';
import call from '../assets/call.png';

function Contacts() {
    return (
        <>

            <div className='flex justify-center content-center   '>
                <div className=' bg-[#FFBC0E] h-lvh text-white w-2/3'>

                    <nav>
                        <ul className='flex  pt-4 justify-around  items-center text-xl text-white'>
                            <div className='logo flex   items-center'>
                                <img className=' w-9 ' src={logo} alt="" />
                                <Link to='/Mainpg'>
                                    <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                                </Link>
                            </div>

                            <Link to='/'>
                                <li className='cursor-pointer mr-42 font-josefin'>Home</li>
                            </Link>

                        </ul>
                    </nav>


                    <div className=' ml-24'>

                        <img src="https://i.pinimg.com/564x/e5/2f/97/e52f97c15cf41f4d4ec05870eb1dd15f.jpg" className='w-[25rem] h-[23rem] mt-12' alt="" />

                    </div>

                    <div className='flex justify-center mt-5'><img src={logo} className='h-12' alt="" /><h2 className='text-2xl mr-2'>Nagaland</h2></div>



                </div>
                <div className=' w-1/3 overflow-y-hidden '>
                    <nav>
                        <ul className='flex  pt-4 justify-around  items-center text-xl text-white'>
                            <Link to='/About'>
                                <li className='cursor-pointer text-[#FFBC0E] font-josefin'>About</li>
                            </Link>
                            <Link to='/Review'>
                                <li className='cursor-pointer text-[#FFBC0E]  font-josefin'>Review</li>
                            </Link>
                        </ul>
                    </nav>
                    <div className=' font-josefin font-light text-2xl mt-44'>
                        <div className='flex justify-center content-center  '><img className='h-10 mr-5' src={email} alt="" /><h4 className='mb-6'>Spotfinder@community.com</h4></div>
                        <div className='flex justify-center content-center  '><img className='h-9 mr-5' src={call} alt="" /><h4>+91 123-456-789</h4></div>


                    </div>

                    <div className='bg-[#FFBC0E]  ml-10  mt-14 w-96 h-1'></div>

                </div>



            </div>
        </>
    )
}

export default Contacts