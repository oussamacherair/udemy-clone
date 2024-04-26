import React, { useState } from 'react'

import Google from '../assets/google.png'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TwiterProvider, auth, db, facebookProvider, gitHubProvider, googleProvider } from '../firebase.config'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';

function logIn() {
  let navigate = useNavigate()
  let [email, getEmail] = useState('')
  let [password, getPassword] = useState('')

  const SignUp = () => navigate('/SignUp')
  const GoogleSign = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const facebookSign = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider)
    }
    catch (error) {
      console.log(error)
    }
  }
  const TwitterSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, TwiterProvider)
      navigate('/');
    }
    catch (error) {
      console.log(error)
    }
  }
  const GithupSignIn = async () => {
    try {
      signInWithPopup(auth, gitHubProvider)
      if(auth.currentUser) navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }
  const docRef = collection(db, "users");
  const Submit = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>navigate('/')).catch((err)=>alert('invalid-credential'))
  /*  getDocs(docRef)
      .then((res) => {
        console.log(res.docs.map((item) => {
          return item.data()
        }))
      }).catch(err => {
        console.log(err)
      })*/


  }
  return (
    <div className='p-10 mx-auto'>
      <div className='w-full md:w-80 mx-auto'>
        <h1 className='text-xl py-4'>Log in to your Udemy account</h1>
        <div >
          <div onClick={() => GoogleSign()} className='flex my-2 items-center  justify-start w-full  px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
            {/*<FaGoogle className='text-3xl mr-4 text-blue-500 bg-red-500' />*/}
            <img src={Google} className='w-10 mr-4 -ml-2' alt={Google} />
            <h2 className='text-lg font-light'>Continue with Google</h2>
          </div>
          <div onClick={() => facebookSign()} className='flex my-2 justify-start items-center w-full  px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
            <FaFacebook className='text-3xl mr-4 text-blue-700' />
            <h2 className='text-lg font-light'>Continue with Facebook</h2>
          </div>
          <div onClick={() => TwitterSignIn()} className='flex my-2 justify-start items-center w-full  px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
            <FaXTwitter className='text-3xl mr-4' />
            <h2 className='text-lg font-light'>Continue with X(Twitter)</h2>
          </div>
          <div onClick={() => GithupSignIn()} className='flex my-2 justify-start items-center w-full  px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
            <FaGithub className='text-3xl mr-4 text-purple-700' />
            <h2 className='text-lg font-light'>Continue with Github</h2>
          </div>
        </div>
        <form action="" className='flex flex-col mt-2 mb-4 w-full md:min-w-92' onSubmit={e => Submit(e)}>
          <input onChange={(e) => getEmail(e.target.value)} type="email" placeholder='Email' className='  px-4 py-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100' />
          <input type="Password" onChange={e => getPassword(e.target.value)} placeholder='Password' className=' px-4 py-4 mt-2 mb-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100' />
          <input type="submit" value="Log In" className='text-xl  px-4 py-4 bg-[#a435f0] font-bold text-md cursor-pointer text-white hover:bg-purple-600' />
        </form>

        <div className='border-b-2 border-gray-300  pb-4 mb-4'>
          <h1 className='text-purple-600 text-xl underline capitalize font-bold text-center p-4 cursor-pointer'>
            <span className='text-black text-sm no-underline'>or</span> forget Password</h1>
        </div>

        <p className='text-center'>Don't have an account?<span onClick={SignUp} className='text-purple-700 underline capitalize font-bold cursor-pointer'>Sign up
          <br />Log in with your organization</span> </p>
      </div>
    </div>
  )
}

export default logIn