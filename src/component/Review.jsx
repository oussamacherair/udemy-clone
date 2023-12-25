import React from 'react'
import Course from './Course';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';


const formatDate = (dateString) => {
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}
function Review({ content, created, user, rating, course }) {
    const reviewStar = (rate) => {
        let stars;

        if (rate > 4.5) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800'>
                    <FaStar />
                    <FaStar className='mx-[2px] ' />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaStar />
                </div>
            );
        } else if (rate > 4 & rate < 5) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 '>
                    <FaStar />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaStarHalfAlt />
                </div>
            );
        } else if (rate == 4) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 '>
                    <FaStar />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaRegStar />
                </div>
            );
        } else if (rate > 3 & rate < 4) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 '>
                    <FaStar />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaStarHalfAlt className='mx-[2px]' />
                    <FaRegStar />
                </div>
            );
        } else if (rate == 3) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 '>
                    <FaStar />
                    <FaStar className='mx-[2px]' />
                    <FaStar className='mx-[2px]' />
                    <FaStarHalfAlt className='mx-[2px]' />
                    <FaRegStar />
                </div>
            );
        } else if (rate > 2 & rate < 3) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 '>
                    <FaStar />
                    <FaStar className='mx-[2px]' />
                    <FaStarHalfAlt className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar />
                </div>
            );
        } else if (rate == 2) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 '>
                    <FaStar />
                    <FaStar className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar />
                </div>
            )
        }
        else if (rate > 1 & rate < 2) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800'>
                    <FaStar />
                    <FaStarHalfAlt className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar />
                </div>
            );
        }
        else if (rate == 1) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800'>
                    <FaStar />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar className='mx-[2px]' />
                    <FaRegStar />
                </div>
            );
        }

        return stars;
    }
    let name = user.title.toUpperCase()
    let nameIn = name.split(' ')
    name = nameIn[0]

    return (
        <div className='bg-white shadow-md mx-2 border-b-8 border-[#5624d0] py-5 px-9 min-h-52'>
            <div className='relative flex items-center'>     
                <div className={nameIn.length>1?'h-12 w-12 flex justify-center items-center border-2 mx-2 border-[#5624d0] rounded-full':'hidden'}>
                    <span>{nameIn.length > 1 ? name[0].charAt(0) + nameIn[1].charAt(0) : ''}</span>
                </div>
                <div className='text-[#5624d0]'>
                    <span>{nameIn.length > 1 ? name + ' ' + nameIn[1] : name}</span>
                </div>


                <p className='absolute top-[-13px] right-[-27px] text-gray-500 text-sm'>{formatDate(created)}</p>
            </div>
            <div >
                <p className='link text line-clamp-3 my-2'>{course}</p>
            </div>
            <div className='w-32 text-3xl my-3 flex items-center'>
                {reviewStar(rating)}
                <p className='mx-2'>{rating}</p>
            </div>
            <div className='text-pretty'>
                <p>{content}</p>
            </div>

        </div>
    )
}

export default Review