import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Course from './Course'
import { NavLink} from 'react-router-dom';
import { CoursesLoaders } from '../loaders/CoursesLoaders';



function Coursesimilar({ primary_category, page }) {
    let Cat = encodeURIComponent(primary_category)
    const { data: SimilarCourses, isLoading, isError, error } = useQuery({
        queryKey: ['SimilarCourses', primary_category, page],
        queryFn: () => axios.get(`/api/courses/category/${Cat}/${page}`).then(response => response.data)
    })
    if (isLoading) {
        return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 col-span-4 p-4'>
            <CoursesLoaders />
            <CoursesLoaders />
            <CoursesLoaders />
            <CoursesLoaders />
            <CoursesLoaders />
            <CoursesLoaders />
        </div>

    }
    if (isError) return <h1>{error.message}</h1>

    return (
        <div className='px-2 py-8 my-2 col-span-4'>
            <h1 className='text-2xl font-black px-2 py-4'>Explore Similar Course</h1>

            <div className='grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {SimilarCourses ?.map(({ headline, id, image_480x270, url, visible_instructors, title }) => (

                    <NavLink to={`${url}${id}`} key={id}>
                        <Course key={id}
                            headline={headline}
                            id={id}
                            image_480x270={image_480x270}
                            title={title}
                            url={url}
                            visible_instructors={visible_instructors}
                            rating={((Math.random() * 4) + 1).toPrecision(2)} />


                    </NavLink>


                ))}

            </div>


        </div>



    )
}

export default Coursesimilar