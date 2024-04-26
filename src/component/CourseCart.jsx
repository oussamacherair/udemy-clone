import React from 'react'
import { reviewStar } from '../../BackendData/functions/functions';
import { NumericFormat } from 'react-number-format'
import { FaTag } from "react-icons/fa";

function CourseCart({ visible_instructors, image_480x270, headline, price, rating, id, lectures, quizzes, sectionNumber,RemoveFromCart,db_id}) {
    let teacher = visible_instructors.map(user => user.stringValue)
    return (
        <div className='col-span-9 grid-flow-row-dense md:grid grid-cols-12 lg:p-4 '>
            <div className='col-span-8 md:grid grid-cols-12 gap-4 '>
                <div className='col-span-3'>
                    <img src={image_480x270} alt={image_480x270} />
                </div>
                <div className='md:p-2 col-span-9'>
                    <div>
                        <h2 className='font-bold'>{headline}</h2>
                        <div className='flex md:hidden items-center justify-between'>
                            <h3 className='text-gray-700 text-xs'>{teacher.map(el => el)}</h3>
                            <div className='text-[#5624d0]'>
                                <h1 className='inline-block mr-2'>{`$${price}.99`} </h1><FaTag className='inline-block' />
                            </div>
                        </div>
                        <h3 className='hidden md:block text-gray-700 text-xs'>{teacher.map(el => el)}</h3>
                        <div className='flex justify-content items-center text-xs'>
                            <span className='font-black'>{!!rating?rating.toFixed(1):'4'}</span>
                            <span className='mx-2'>{reviewStar(!!rating?rating.toFixed(1):'4')}</span>
                            <div className='text-gray-600'>
                                (<NumericFormat className='w-12 focus:outline-none pointer-events-none' value={id} thousandSeparator="," /> ratings)
                               </div>
                        </div>
                        <div className='text-xs md:text-sm mt-4 text-gray-700'>
                            {lectures} lectures, {quizzes} quizzes, {sectionNumber} sections
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-4 md:flex justify-between p-4 text-[#5624d0]'>
                <div className='flex text-xs md:text-sm md:flex-col md:items-end justify-between'>
                    <button onClick={()=>RemoveFromCart(db_id)}>remove</button>
                    <button>save for later</button>
                    <button>move to wishlist</button>
                </div>
                <div className='hidden md:inline-block'>
                    <h1 className='inline-block mr-2'>{`$${price}.99`} </h1><FaTag className='inline-block' />
                </div>
            </div>
        </div>
    )
}

export default CourseCart
