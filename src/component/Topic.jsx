import React from 'react'

function Topic({ title, supTopic }) {
    let SupTop = supTopic

    return (
        <div className='mb-4'>
            <div>
                <h1 className='text-sm md:text-xl py-1 font-bold'>{title}</h1>
            </div>
            <div>
                {SupTop.map(Sup =>
                (
                    <div className='my-4'>
                        <h1 className='underline font-black text-[#5624d0] cursor-pointer text-sm md:text-lg'>{Sup.topic_name}</h1>
                        <p className='text-gray-700 my-2 text-[13px] md:text-sm '>{Sup.learning} learners</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topic