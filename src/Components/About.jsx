import React, { useState } from 'react'; // Import useState from React

import logo from '../assets/logo.png';
import bk from '../assets/bk.png'
import { Link } from 'react-router-dom';
import hotel from '../assets/hotel.jpg'

// const getEmbeddedVideoUrl = (videoLink) => {
//   if (videoLink.includes('youtu.be')) {
//       const videoId = videoLink.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];
//       if (videoId) {
//           return `https://www.youtube.com/embed/${videoId}`;
//       }
//   }
//   return videoLink;
// };

function About() {
  // Use useState hook to manage state
  const [videoLink, setVideoLink] = useState('');
  const [embeddedVideoUrl, setEmbeddedVideoUrl] = useState('');

  const handleInputChange = (event) => {
    const link = event.target.value;
    setVideoLink(link);
    const embeddedUrl = getEmbeddedVideoUrl(link);
    setEmbeddedVideoUrl(embeddedUrl);
  };

  return (
    <div className="bg-cover h-screen " style={{ backgroundImage: `url(${bk})` }}>

      <nav>
        <ul className='flex  pt-2 justify-around  items-center text-xl '>
          <div className='logo flex   items-center'>
            <img className=' w-9 ' src={logo} alt="" />
            <h1 className=' text-3xl pl-5 text-white  font-josefin'>Spotfinder</h1>
          </div>
          <Link to='/'>
            <li className='text-white cursor-pointer  font-josefin'>Home</li>
          </Link>
          <Link to='/Review'>
            <li className='text-[#FFBC0E] cursor-pointer  font-josefin'>Review</li>
          </Link>
          <li className='text-[#FFBC0E] cursor-pointer  font-josefin'>Contact</li>
        </ul>
      </nav>

      <div className='flex justify-end'>
        <img className=' w-180 h-80  mt-24 mr-48' src={hotel} alt="" />
        <div className='Descrip '><p className=' pr-6 pt-20 w-96 text-2xl font-josefin font-light'>We believe in the beauty of exploration and the joy of finding hidden gems. we're here to guide you to the best destinations for relaxation and rejuvenation. Our platform empowers users like you to share your favorite nature reserve places and cafes, creating a vibrant community of nature enthusiasts and cafe connoisseurs.</p></div>
        <div className='border-2  h-80 border-yellow-500 mr-11 mt-20'></div>
      </div>
    </div>
  )
}

export default About;
