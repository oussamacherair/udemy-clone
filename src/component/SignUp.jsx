import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import Google from '../assets/google.png'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TwiterProvider, auth, facebookProvider, gitHubProvider, googleProvider } from '../firebase.config'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function logIn() {
    let navigate = useNavigate()
    let [email, getEmail] = useState('')
    let [password, getPassword] = useState('')
    
    const Submit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
    }
    return (
        <div className='p-10 mx-auto'>
            <div className='w-full md:w-80 mx-auto'>
                <h1 className='text-3xl font-black py-4'>Sign Up</h1>

                <form action="" className='flex flex-col mt-2 mb-4 w-full md:min-w-92' onSubmit={e => Submit(e)}>
                    <input onChange={(e) => getEmail(e.target.value)} type="email" placeholder='Email' className='  px-4 py-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100' />
                    <input type="Password" onChange={e => getPassword(e.target.value)} placeholder='Password' className=' px-4 py-4 mt-2 mb-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100' />
                    <input type="submit" value="Log In" className='text-xl  px-4 py-4 bg-[#a435f0] font-bold text-md cursor-pointer text-white hover:bg-purple-600' />
                </form>

                <div className='border-b-1 border-gray-300  pb-4 mb-4'>
                    <h1 className='text-purple-600 text-xl underline capitalize font-bold text-center p-4 cursor-pointer'>
                        <span className='text-black text-sm no-underline'>or</span> forget Password</h1>
                </div>

            </div>
        </div>
    )
}

export default logIn