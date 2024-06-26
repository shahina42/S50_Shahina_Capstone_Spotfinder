import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from './SpotImages'

function Landingpg() {
    console.log(images)


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

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

                            <Link to='/About'>
                                <li className='cursor-pointer mr-42 font-josefin'>About</li>
                            </Link>
                            <Link to='/Review'>
                                <li className='cursor-pointer  font-josefin'>Review</li>
                            </Link>
                            <Link to='/Contacts'>
                                <li className='cursor-pointer  font-josefin'>Contact</li>
                            </Link>
                        </ul>
                    </nav>


                    <div className='description flex  pl-20 mt-28 '>
                        <div className=' border-2 h-[21rem] border-white'></div>
                        <div className=' '><h2 className='pl-5 mb-2 w-2/3 text-7xl font-bold  font-josefin'>Discover the best with us!</h2>
                            <h4 className='w-1/2 mb-5 pl-5 text-2xl  font-josefin font-light'>explore  secluded beaches to enchanting temples and cafes for an unforgettable experience.</h4>
                            <Link to='/SignUp'><button className='ml-4 text-2xl border-2 border-white h-11 hover:bg-yellow-400 hover:text-white rounded-lg  w-32 bg-white text-yellow-400  font-josefin'>Sign Up</button> </Link>
                            <Link to='/SignIn'><p className='pl-4 pt-2  font-josefin' >Already have an account?  <u className=' hover:cursor-pointer  font-josefin'> Sign In</u></p></Link>
                        </div>
                    </div>

                </div>



                <div className=' w-1/3 overflow-y-hidden '>

                    <Slider {...settings} className="custom-slider">
                        {images.map((data) => (
                            <div className="h-screen ">
                                <img className="w-full h-full " src={data.image} alt="" />

                            </div>
                        ))}
                    </Slider>
                </div>


            </div>



        </>
    )
}

export default Landingpg