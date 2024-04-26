import React from 'react'
import Teacher from '../assets/instructor.jpg'
function Instractor() {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col md:flex-row md:justify-between p-5 text-center md:text-start'>
                <div className='w-full md:w-[400px] md:h-[400px]'>
                    <img className='w-full' src={Teacher} alt={Teacher} />
                </div>
                <div className='md:ml-20 md:w-[400px] self-center'>
                    <h1 className='text-xl md:text-3xl capitalize font-bold my-4'>Become an instructor</h1>
                    <p className='text-sm md:text-lg my-3'>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
                    <div className='px-4 py-2 border-2 border-black font-bold text-white bg-black text-md cursor-pointer hover:bg-gray-100 hover:text-black'>
                        <h3>Start Teaching Today</h3>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Instractor