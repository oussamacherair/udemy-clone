import React from 'react'
import { TopicsData } from './TopicsData'
import Topic from './Topic.jsx'


function Topics() {
    return (
        <div className='bg-[#f7f9fa] px-8 py-10'>
            <h1 className='py-6 capitalize text-3xl font-bold'>Featured topics by category</h1>
            <div className='grid grid-flow-row-dense gap-x-4 md:gap-x-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                {TopicsData.map((TopicData,i) => (
                    <Topic key={i} title={TopicData.topic_Title} supTopic={TopicData.supTopics} />
                ))}
                <div className='col-span-2 md:col-span-1 px-4 py-2 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-200 lg:w-8/12'>
                    <h3>Explore more Topics</h3>
                </div>
            </div>

        </div>
    )
}

export default Topics