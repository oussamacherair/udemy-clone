import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'
import { auth } from '../firebase.config'
import { Avatar } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import NavbarCats from './navbarCats';
import Sidebar from './sidebar'
function Header() {
  let navigate = useNavigate()
  const [isSidebarOpen, setToggle] = useState(false)
  const logIn = () => {
    navigate('/LogIn')
  }

  const Toggler = () => setToggle(!isSidebarOpen)
  
  return (
    <header className='flex flex-col p-2 md:px-4 md:py-4 shadow-bottom'>
      <div className={!!auth.currentUser?'flex items-center justify-around space-x-11 border-b-2  pb-4 mb-3':'flex items-center justify-around space-x-11'}>

        <div className="flex items-center space-x-4">
          <Link to='/'>
            <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' className='h-9 object-contain cursor-pointer' alt='udemy' />
          </Link>
          <div>
            <h1 className='link hidden md:flex'>Categories</h1>
          </div>
        </div>

        {/* left mid*/}
        <div className='flex-grow hidden md:block'>
          <div className='flex border-2 border-black rounded-full h-20 min-w-96 relative'>
            <div>
              <AiOutlineSearch className='absolute bottom-5 left-1 cursor-pointer' size={35} />
            </div>

            <input type="text" placeholder='Search for anything' className='h-full px-8 pl-10 text-xl w-full rounded-full focus:outline-none' />
          </div>

        </div>

        {/* left right*/}


        <div className='hidden md:flex space-x-2'>
          <p className="link text-lg">Udemy Business</p>
          <p className="link text-lg">Teach on Udemy</p>
        </div>
        <div className='flex space-x-4 items-center pr-4'>
          <div className='hidden md:flex'>
            <AiOutlineShoppingCart className='link text-3xl' />
          </div>
          {

            !!auth & !!auth?.currentUser?.displayName ?
              (<div className=' relative'>
                <Avatar className=' cursor-pointer' src={auth?.currentUser?.photoURL} onClick={() => Toggler()} />
                {!isSidebarOpen && <Sidebar name={auth?.currentUser?.displayName} email={auth.currentUser.email} />}
              </div>) :

              (<div className='flex space-x-4'>
                <div onClick={logIn} className='px-3 py-2 flex  justify-start items-center bg-black text-white border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100 hover:text-black'>

                  <h3>Log in</h3>


                </div>
                <div className='hidden md:flex px-3 py-2  justify-start items-center   border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
                  <h3>Sign up</h3>
                </div>

              </div>)
          }
          <div className='hidden md:block'>
            <GrLanguage size={25} />
          </div>
        </div>
      </div>



      {!!auth & !!auth?.currentUser?.displayName ? (<div>
        <NavbarCats style={'text-lg mx-2 cursor-pointer p-2 link shadow-[rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px]'} size={8} />
      </div>) : <div></div>}


    </header>
  )
}

export default Header