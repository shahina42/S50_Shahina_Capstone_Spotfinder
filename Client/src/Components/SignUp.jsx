import React from 'react'
import bg from '../assets/bg.png';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie';

function SignUp() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const[userdata,setuserdata]=useState(null); 
  const navigate=useNavigate();

  const onSubmit = async (data) => {
    try {
      const { UserName, Email, Password } = data;
        const response = await axios.post('http://localhost:3000/user/signup', {UserName,Email,Password}, {
            headers: {
                'Content-Type': 'application/json'
            }
             
        });
        if (response.status === 201) {
          const{userData,token}=response.data;
          console.log(UserName)
            Cookies.set('username',UserName)
            Cookies.set('userData',userData)
          Cookies.set('token',token,{expires:1})
          setuserdata(userData); 

            alert("Siged up successfully")
            navigate('/Mainpg'); 
        } else {
            console.error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error); 
    }
}



  return (
    <>
    
    
     <div className="bg-cover h-screen flex justify-center items-center " style={{ backgroundImage: `url(${bg})` }}>

<form onSubmit={handleSubmit(onSubmit)}>

<div className=' h-[25rem] w-[25rem]  bg-white rounded-md '>

<h2 className=' text-4xl text-black ml-32  font-semibold'>Sign Up</h2><br />

<input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 ' placeholder='Name' {...register('UserName', { required: "Username is required", minLength: { value: 4, message: "Username must be more than 4 characters" }, maxLength: { value: 15, message: "Username must be less than 15 characters" } })}/><br />
<p className='text-black ml-32'>{errors.UserName?.message}</p>
<input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Email'  {...register('Email', { required: "E-mail is required", pattern: { value: /^\S+@\S+$/i, message: "This is not a valid email" } })}/><br />
<p className='text-black ml-32 '>{errors.Email?.message}</p>
<input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Password' {...register('Password', { required: "Password is required", minLength: { value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password must be less than 10 characters" } })}/>
<p className='text-black ml-32'>{errors.Password?.message}</p><br />

<button className=' bg-yellow-400 w-32 py-2 px-4 text-white rounded-md ml-32 hover:bg-black'>Submit</button>

</div>
</form>
     </div>
    
    
    </>
  )
}

export default SignUp