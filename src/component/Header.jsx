import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'
import { auth } from '../firebaseSettings'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
function Header() {
  let navigate = useNavigate()
  const logIn = () => navigate('/LogIn')



  return (
    <header className='flex items-center justify-between sm:justify-around space-x-2 p-3 text-sm shadow-md'>

      <div className="flex items-center space-x-2 ">
        <Link to='/'>
          <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' className='h-9 object-contain cursor-pointer' alt='udemy' />
        </Link>
        <div>
          <h1 className='link hidden sm:flex'>Categories</h1>
        </div>
      </div>

      {/* left mid*/}
      <div className='hidden sm:flex items-center flex-grow justify-between'>
        <div className='flex items-center flex-grow border px-2 h-10 rounded-full'>
          <div>
            <AiOutlineSearch className='text-2xl' />
          </div>

          <input type="text" placeholder='Search for anything' className='px-3 rounded-full h-full w-6 flex-grow flex-shrink focus:outline-none' />
        </div>

      </div>

      {/* left right*/}

      <div className='flex justify-between items-center space-x-2'>
        <div className=' hidden lg:flex space-x-2 '>
          <p className="link">Udemy Business</p>
          <p className="link">Teach on Udemy</p>
        </div>
        <div className='hidden lg:flex'>
          <AiOutlineShoppingCart className='link text-3xl' />
        </div>
        <div className='flex space-x-2'>
          <div onClick={logIn} className='px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>

            <h3>Log in</h3>


          </div>
          <div className='hidden sm:flex px-4 py-2 border-2 border-black font-bold text-white bg-black text-md cursor-pointer hover:bg-gray-100 hover:text-black'>
            <h3>Sign up</h3>
          </div>

        </div>

        <div className=' hidden lg:flex px-4 py-2 border-2 border-black font-bold text-lg cursor-pointer hover:bg-gray-100'>
          <GrLanguage />
        </div>



      </div>

    </header>
  )
}

export default Header