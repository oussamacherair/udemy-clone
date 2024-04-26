import React from 'react'
import Promo from '../assets/Promo.jpg'
function BusinessUdemy() {
    return (
        <div className='md:flex md:justify-center md:items-center px-4 my-5'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-[500px] order-2 md:order-1'>
                    <div className='w-52 py-4'>
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='md:text-3xl text-lg font-bold py-2'>Upskill your team with Udemy Business</h1>
                        <ul className='list-disc text-sm md:text-xl px-4'>
                            <li >Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
                            <li className='my-2'>International course collection in 14 languages</li>
                            <li>Top certifications in tech and business</li>
                        </ul>


                    </div>
                    <div className='md:flex my-4'>
                        <div className='px-4   py-2 border-2 border-black font-bold text-white bg-black text-md cursor-pointer hover:bg-gray-100 hover:text-black'>
                            <h3>Get Udemy Business</h3>
                        </div>
                        <div className='px-4 my-5 md:my-0 py-2 md:mx-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100'>
                            <h3>Learn more</h3>
                        </div>
                    </div>
                </div>
                <div className='order-1 md:order-2 w-full md:w-[400px] md:h-[400px]'>
                <img className='object-cover'  src={Promo} alt={Promo} />
                </div>
            </div>





        </div>
    )
}

export default BusinessUdemy