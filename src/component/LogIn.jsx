import React from 'react'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import Apple from '../assets/apple.png'
import { auth, googleProvider } from '../firebaseSettings'
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function logIn() {
  let navigate = useNavigate()
  const GoogleSign = async () => (
    await signInWithRedirect(auth, googleProvider),
    navigate('/')
  )


  return (
    <div className='flex justify-center p-10'>
      <div>
        <h1 className='text-xl py-4'>Log in to your Udemy account</h1>
        <div >
          <div onClick={() => GoogleSign()} className='flex items-center w-full  px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
            <img src={Google} className='w-10' />
            <h2 className='text-xl font-light ml-3'>Continue with Google</h2>
          </div>
          <div className='flex items-center  px-4 py-1 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100 my-2'>
            <img src={Facebook} className='w-10 ml-2 object-cover' />
            <h2 className='text-xl font-light ml-4 '>Continue with Facebook</h2>
          </div>
          <div className='flex items-center  px-4 py-1 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
            <img src={Apple} className='w-10' />
            <h2 className='text-xl font-light ml-3'>Continue with Apple</h2>
          </div>
        </div>
        <form action="" className='flex flex-col mt-2 mb-4 w-full md:min-w-92'>
          <input type="email" placeholder='Email' className='  px-4 py-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100' />
          <input type="Password" placeholder='Password' className=' px-4 py-4 mt-2 mb-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100' />
          <input type="submit" value="Log In" className='text-xl  px-4 py-4 bg-[#a435f0] font-bold text-md cursor-pointer text-white hover:bg-purple-600' />
        </form>

        <div className='border-b-2 border-gray-300  pb-4 mb-4'>
          <h1 className='text-purple-600 text-xl underline capitalize font-bold text-center p-4 cursor-pointer'>
            <span className='text-black text-sm no-underline'>or</span> forget Password</h1>
        </div>
        <p className='text-center'>Don't have an account?<span className='text-purple-700 underline capitalize font-bold cursor-pointer'>Sign up
          <br />Log in with your organization</span> </p>
      </div>
    </div>
  )
}

export default logIn