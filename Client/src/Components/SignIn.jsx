import React from 'react'
import bg from '../assets/bg.png';
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'



function SignIn() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [userData, setUserData] = useState([]);
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user');
                setUserData(response.data);
            } catch (error) {
                console.log("Error while fetching", error);
            }
        }

        fetchData();
    }, []);

    const onSubmit = async (formData) => {
        if (userData.length > 0) {
            const user = userData.find(
                (user) => user.UserName === UserName && user.Password === password
            );
            if (user) {
                Cookies.set("username", user.UserName);
                console.log(user);
                navigate("/Mainpg");
            } else {
                alert("Invalid email or password")
            }
        } else {
            alert("User data is not available yet.");
        }
    }
    return (
        <>


            <div className="bg-cover h-screen flex justify-center items-center " style={{ backgroundImage: `url(${bg})` }}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=' h-[25rem] w-[25rem]  bg-white rounded-md '>

                        <h2 className=' text-4xl text-black mt-4  ml-32  font-semibold'>Sign In</h2><br />

                        <input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Name' onChange={(e) => { setUserName(e.target.value) }} {...register('UserName', { required: "Username is required" })} /><br />
                        
                        {errors.UserName && <p className='text-black'>{errors.UserName.message}</p>}

                        <input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} {...register('Password', { required: "Password is required" })} /><br />
                        
                        {errors.Password && <p className='text-black'>{errors.Password.message}</p>}

                        <button className=' bg-yellow-400 w-32 py-2 px-4 text-white rounded-md ml-32 hover:bg-black'>Submit</button>

                    </div>

                </form>

            </div>


        </>
    )
}

export default SignIn