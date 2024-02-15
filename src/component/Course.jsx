
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { NumericFormat } from 'react-number-format'




function Course({ headline, id, image_480x270, url, visible_instructors,price,status}) {
    const rating = Math.floor(Math.random() * 5) + 1
    const users = visible_instructors
    const random_number = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
    const reviewStar = (rate) => {
        let stars;

        if (rate > 4.5) {
            stars = (
                <div className='flex justify-between items-center text-yellow-800 text-sm '>
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

    return (
        <div className={status ?'grid grid-flow-row-dense grid-cols-12 gap-6 border-b-2 py-4':'ml-3'}>
            <div className={status?' col-span-4':'w-full border-2 border-gray-300'}>
                <img src={image_480x270} alt={url} className='w-full h-full' />
            </div>
            <div className=" col-span-6">
                <div className='py-2'>
                    <h2 className='line-clamp-2'>{headline}</h2>
                    <h6 className='line-clamp-3 text-sm text-gray-500'>
                        {users?.map(el => el?.title.slice(0, 20))}
                    </h6>

                    <div className='flex text-base'>
                        <h3>{rating.toPrecision(2)}</h3>
                        <div className="mx-2 self-center">{reviewStar(rating)}</div>
                        <NumericFormat className='w-36 text-sm text-gray-600 focus:outline-none pointer-events-none' value={id} thousandSeparator="," />
                    </div>

                    <div className='mt-2 flex'>
                        <h3 className='text-lg mr-3'>{price?.amount?`${price?.price_string}`:`${random_number(25, 100)}.99}`}</h3>
                        <h3 className='text-gray-600 leading-7 text-sm font-semibold  line-through'>${random_number(70, 190)}.99</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course