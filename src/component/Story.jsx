import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
function Story({ description, company, image, job, learning, name }) {
    return (
        <div className='flex flex-col md:flex-row md:items-start border-2 pl-2 py-5 mx-4 border-gray-300 bg-white'>
            <div className='p-1 md:pl-1  py-2 md:w-1/2'>
                <FaQuoteLeft className='text-xl mb-2 md:text-3xl' />
                <div className='text-xs md:text-lg md:py-4'>
                    <p>{description}</p>
                </div>
                <div className='my-2'>
                    <h1 className='capitalize underline font-black text-[#5624d0] cursor-pointer text-sm md:text-lg'>read full story</h1>
                </div>
            </div>

            <div className='md:w-1/2 flex md:flex-col items-center justify-start'>
                <div className=' rounded-full overflow-hidden scale-75'>
                    <img className='md:w-48 md:h-48 w-16 h-16 object-center object-cover' src={image} alt={image} />
                </div>

                <div className='text-xs  md:text-sm md:text-center'>
                    <h1 className='font-bold'>{name}</h1>
                    <h3 className='text-gray-500 font-light'>{job}</h3>
                    {learning ? <h3 className='text-gray-500 font-light'>{learning}</h3> : <h3 className='mt-6'></h3>}
                    <h1 className='md:text-base text-blue-gray-800 font-light'>{company}</h1>

                </div>

                
            </div>
        </div>
    )
}

export default Story