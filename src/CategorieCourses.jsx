import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Course from './component/Course';

import CourseFilter from './CourseFilter';
import SortCourses from './SortCourses';
import { CourseCategoryLoader, Filterloaders, TextBoxLoading} from './component/CoursesLoaders';




const headers = {
    "Authorization": "Basic MnhoS2tPOEFNY1NnaDJlOEFMeUtxUG1xVENFREVWUjNubk9EQjFIcTpNbWhpaVpTNlhxQUxWRVRTME9BSE1vcWxLYVpKS29kZUllVFZIQkljNm9ZWnFZOUxvaGN5akRvdGQ1bGFOZ1oyT3B3bnZMejI2SVlaemlyYXAzR0c5Z2F2bVhHWGMzZXlFUjZPYXpOWVdGVmdNMjBVdGtiSGFGYTExVDNQaE9RdA=="
};
const CatsCourse = async (primary_category, subCategory,duration, price, level) => {

    const url = subCategory
        ? `https://www.udemy.com/api-2.0/courses/?subcategory=${subCategory}&duration=${duration ?? 'short'}&page_size=30&price=${price ?? 'price-paid'}&instructional_level=${level ?? 'all'}&language=en`
        : `https://www.udemy.com/api-2.0/courses/?category=${primary_category}&duration=${duration ?? 'short'}&page_size=20&price=${price ?? 'price-paid'}&instructional_level=${level ?? 'all'}&language=en`;
    const response = await axios.get(url, { headers: headers })
    const { results } = response.data
    return results
}

let Clickedfilter={id:1}
function CategorieCourses() {

    let CategoryCoursesStatus = true
    let { courseCategory, courseSubCategory } = useParams()
    let category = encodeURIComponent(courseCategory)
    const [price, setPrice] = useState(null);
    const [duration, setDuration] = useState(null);
    const [level, setLevel] = useState(null)
    const [subCategory_click, setCategory] = useState(null)

    //courses api
    const { data: CategoryCoursesList, isLoading: CourseLoading, isError: CourseError, error: CourseErrorMsg } = useQuery({
        queryKey: ['coursecategorylist', category, subCategory_click, duration, , price,level, courseSubCategory],
        queryFn: () => CatsCourse(category, subCategory_click || courseSubCategory,  duration, price, level),
    })

console.log(subCategory_click,courseSubCategory)
    if (CourseLoading) {
        return <div className=' grid grid-cols-4 gap-28 px-8 pt-10'>
            <div className=' col-span-4'>
                <TextBoxLoading/>
            </div>
                <div>
                    <Filterloaders/>
                    <Filterloaders/>
                    <Filterloaders/>
                    <Filterloaders/>
                    <Filterloaders/>
                </div>
                <div className=' col-span-3'>
                    <CourseCategoryLoader/>
                    <CourseCategoryLoader/>
                    <CourseCategoryLoader/>
                    <CourseCategoryLoader/>
                    <CourseCategoryLoader/>
                </div>
        </div>
    }
    if (CourseError) return <h1>{CourseErrorMsg.message}</h1>
    if (CategoryCoursesList?.length < 1) return <h1>no courses found</h1>
 
    return (
        <div className='py-4 px-4'>
            <div>
                {courseSubCategory ? <h1 className='p-4 text-xl'>{`${courseCategory} / ${courseSubCategory}`} Courses</h1> : <h1 className='p-4 text-xl'>{courseCategory} Courses</h1>}
                <h2>Courses to get you started</h2>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-4 gap-x-14 gap-y-4'>
                <div className=' col-span-4'>
                    <SortCourses />
                </div>
                <div className='col-span-1'>
                    <CourseFilter filterprops={Clickedfilter} duration={setDuration} price={setPrice} level={setLevel} subCategory={setCategory}  />
                </div>
                <div className='col-span-3 pr-8'>
                    {CategoryCoursesList?.map(({ headline, id, image_480x270, url, visible_instructors, price_detail }) => (
                        <NavLink  className='pr-4' to={`${url}${id}`}>
                            <Course status={CategoryCoursesStatus} headline={headline} id={id} image_480x270={image_480x270} url={url} visible_instructors={visible_instructors} price={price_detail} />
                        </NavLink>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default CategorieCourses