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
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <>
            <div className='flex justify-center content-center  '>
                <div className=' bg-[#FFBC0E] h-lvh text-white w-1/2'>
                    <nav>
                        <ul className='flex  pt-2 justify-around  items-center text-xl text-white'>
                            <div className='logo flex   items-center'>
                                <img className=' w-9 ' src={logo} alt="" />
                                <Link to='/Caraousel'>
                                    <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                                </Link>
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



                <div className=' w-1/2  '>
               
                <Slider {...settings}>
                            {images.map((data)=>(
                                 <div  className="h-screen ">
                     <img className="w-full h-full " src={data.image} alt="" />
                       
                          </div>
                     ))}
                     </Slider>

                                {/* <nav>
                                    <ul className='flex justify-around pt-4 items-center text-xl text-white'>

                                        <li className='cursor-pointer  font-josefin'>Review</li>
                                        <li className='cursor-pointer  font-josefin'>Contact</li>

                                    </ul>
                                </nav> */}
                     
                </div>
               
            </div>
         


        </>
    )
}

export default Landingpg