import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'
import ReviewData from './ReviewData';


function Review() {
    // console.log(ReviewData);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1900,
      pauseOnHover: true
    };
    return (
        <>
       



            <div className='flex justify-center content-center  '>

                <div>

                </div>


                <div className='w-1/2 bg-[#FFBC0E]  h-lvh'>

                    <nav>
                        <ul className='flex  pt-2 justify-around  items-center text-xl text-white'>
                            <div className='logo flex   items-center'>
                                <img className=' w-9 ' src={logo} alt="" />
                                <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                            </div>

                            <Link to='/'>
                                <li className='cursor-pointer  font-josefin'>Home</li>
                            </Link>

                        </ul>

                    </nav>
                    
                    <div className=' w-11/12 absolute ml-10 pt-11 ' >
                   <Slider {...settings}>
                    {ReviewData.map((data) => (
                <div key={data.id} >
                    <div className='h-32 w-32 bg-white border-4 ml-32 border-[#FFBC0E] rounded-full'>
                        <img className='h-32 w-32 rounded-full' src={data.image} alt="ReviewData Image" />
                    </div>
                    <div className='h-80 w-[18rem] pl-4 pt-5 font-josefin ml-4 mr-14 text-2xl font-light bg-white rounded-2xl border-2 border-[#FFBC0E]'>
                    ❝ {data.content} ❞
                    </div>
                </div>
            ))}
       
       </Slider>
</div>
                </div>


                <div className='w-1/2 bg-white h-lvh'>
                    <nav>
                        <ul className='flex justify-around pt-4 items-center text-xl text-white'>

                            <Link to='/About'>
                                <li className='cursor-pointer text-[#FFBC0E]  font-josefin'>About</li>
                            </Link>
                            <li className='cursor-pointer  text-[#FFBC0E] font-josefin'>Contact</li>

                        </ul>
                    </nav>
                </div>
            </div>




        </>
    )
}

export default Review