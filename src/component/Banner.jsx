import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { AiOutlineSearch } from 'react-icons/ai'
function Banner() {
    return (
        <div className="relative h-auto">
            <Carousel autoPlay infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}

            >
                <div className='relative min-h-[20rem] w-full'>
                    <div className='h-[15rem] md:h-[25rem]'>
                        <img loading='lazy' src="https://rebrand.ly/banner_1" className='w-full h-full object-cover' />

                    </div>
                    <Card className="hidden md:block absolute top-20 left-20 mt-6 w-96 text-left">
                        <CardBody>
                            <Typography variant="h3" color="blue-gray" className="mb-2">
                                Build ready-for-anything teams
                            </Typography>
                            <Typography>
                                See why leading organizations choose to learn with Udemy Business.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Request a demo</Button>
                        </CardFooter>
                    </Card>

                    <Card className="sm:hidden rounded-none text-left px-4 py-2 shadow-none">
                        <CardBody className='p-0 text-sm'>
                            <Typography variant="h4" color="blue-gray" className="mb-2 ">
                                Build ready-for-anything teams
                            </Typography>
                            <Typography >
                                See why leading organizations choose to learn with Udemy Business.
                            </Typography>
                        </CardBody>
                        <CardFooter className="p-0 my-4">
                            <Button className='rounded-none p-4 text-xl normal-case'>Request a demo</Button>
                        </CardFooter>

                        <div className='flex py-2 items-center flex-grow border px-2 h-16 rounded-none border-black'>
                            <div>
                                <AiOutlineSearch className='text-2xl' />
                            </div>

                            <input type="text" placeholder='What do you want to learn' className='px-3 rounded-full h-full w-6 flex-grow flex-shrink focus:outline-none' />
                        </div>

                    </Card>
                </div>
                <div className='relative min-h-[20rem] w-full overflow-hidden'>
                    <div className='h-[15rem] md:h-[25rem]'>
                        <img loading='lazy' src="https://rebrand.ly/banner_2" className='w-full h-full object-cover' />

                    </div>                    
                    <Card className="hidden md:block absolute top-20 left-20 mt-6 w-96 text-left">
                        <CardBody>
                            <Typography variant="h3" color="blue-gray" className="mb-2">
                                Leading Up lifts you up
                            </Typography>
                            <Typography>
                                Listen to the Udemy leadership development podcast and grow as a person and professional.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Listen now</Button>
                        </CardFooter>
                    </Card>

                    <Card className="sm:hidden rounded-none text-left p-6">
                        <CardBody className='p-0 pb-6 text-sm'>
                            <Typography variant="h4" color="blue-gray" className="mb-2 ">
                                Leading Up lifts you up
                            </Typography>
                            <Typography >
                                Listen to the Udemy leadership development podcast and grow as a person and professional.
                            </Typography>
                        </CardBody>

                        <div className='mt-5 py-2 flex items-center flex-grow border px-2 h-16 rounded-none border-black'>
                            <div>
                                <AiOutlineSearch className='text-2xl' />
                            </div>

                            <input type="text" placeholder='What do you want to learn' className='px-3 rounded-full  h-full w-6 flex-grow flex-shrink focus:outline-none' />
                        </div>

                    </Card>


                </div>
            </Carousel>
        </div>

    )
}

export default Banner