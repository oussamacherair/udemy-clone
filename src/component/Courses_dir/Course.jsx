
import { NumericFormat } from 'react-number-format'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { reviewStar } from "../../../BackendData/functions/functions";
    
function Course({ headline, id, image_480x270, url, visible_instructors, price, status }) {

    const rating = Math.floor(Math.random() * 5) + 1
    const users = visible_instructors
    const random_number = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div className={status ? 'grid grid-flow-row-dense grid-cols-12 gap-6 border-b-2 py-4' : 'ml-3'}>
            <div className={status ? ' col-span-4' : 'w-full border-2 border-gray-300'}>
                <img src={image_480x270} alt={url} className='w-full h-full' />
            </div>
            <div className="col-span-6">
                <div className='py-2'>
                    <h2 className='line-clamp-2'>{headline}</h2>
                    <h6 className='line-clamp-3 text-sm text-gray-500'>
                        {users?.map(el => el ?.title.slice(0, 20))}
                    </h6>

                    <div className='flex text-base'>
                        <h3>{rating.toPrecision(2)}</h3>
                        <div className="mx-2 self-center">{reviewStar(rating)}</div>
                        <NumericFormat className='w-36 text-sm text-gray-600 focus:outline-none pointer-events-none' value={id} thousandSeparator="," />
                    </div>

                    <div className='mt-2 flex'>
                        <h3 className='text-lg mr-3'>{isNaN(price) ? `${random_number(25, 100)}.99`:`${amount.amount}$`}</h3>
                        <h3 className='text-gray-600 leading-7 text-sm font-semibold  line-through'>${random_number(70, 190)}.99</h3>
                    </div>
                </div>
            </div>
            <div>
                <AiOutlineShoppingCart size={30} className={status ? '' : 'hidden'} />
            </div>
        </div>
    )
}

export default Course