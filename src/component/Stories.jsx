import React from 'react'
import { udemyStories } from './StoriesData'
import { MdNavigateNext } from "react-icons/md";
import Story from './Story.jsx'
import Slider from 'react-slick';

function Stories() {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=' bg-gray-100 m-0 overflow-hidden lg:mx-auto py-10 '>
      <div className='relative w-full md:w-[800px] md:mx-auto'>
        <Slider {...settings}>
          {
            udemyStories.map((story, i) => (
              <Story key={i} {...story} />
            ))

          }
        </Slider>
      </div>
      <h1 className='text-center m-5 capitalize underline font-black text-[#5624d0] cursor-pointer text-sm md:text-lg flex md:items-center md:justify-center'>View more customer stories <MdNavigateNext /></h1>

    </div>
  )
}

export default Stories