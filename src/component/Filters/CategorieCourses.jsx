import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import Course from '../Courses_dir/Course';
import CourseFilter from '../Filters/CourseFilter';
import SortCourses from '../Filters/SortCourses';
import { CourseCategoryLoader, Filterloaders, TextBoxLoading } from '../loaders/CoursesLoaders';
import { Button } from '@material-tailwind/react';

let Clickedfilter = { id: 1 };

function CategorieCourses() {
    let CategoryCoursesStatus = true;
    let { courseCategory, courseSubCategory, search } = useParams();
    let category = encodeURIComponent(courseCategory);
    const [price, setPrice] = useState(null);
    const [duration, setDuration] = useState(null);
    const [level, setLevel] = useState(null);
    const [subCategory_click, setCategory] = useState(null);
    const [language, setlanguage] = useState(null);
    const [order, setOrder] = useState(null);

    const {
        data: CategoryCoursesList,
        isLoading: CourseLoading,
        isError: CourseError,
        error: CourseErrorMsg
    } = useQuery({
        queryKey: ['coursecategorylist', category, subCategory_click, duration, price, level, courseSubCategory, language, order, search],
        queryFn: () => axios.get('/api/filter-courses', {
            params: {
                primary_category: category,
                subCategory: subCategory_click,
                duration,
                price,
                level,
                language,
                order,
                search
            }
        }),
    });

    if (CourseLoading) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pt-10'>
                <div className='col-span-1 md:col-span-2 lg:col-span-4'>
                    <TextBoxLoading />
                </div>
                <div className='col-span-1 md:col-span-2 lg:col-span-4'>
                    <Filterloaders />
                    <Filterloaders />
                    <Filterloaders />
                    <Filterloaders />
                    <Filterloaders />
                </div>
                <div className='col-span-1 md:col-span-2 lg:col-span-4'>
                    <CourseCategoryLoader />
                    <CourseCategoryLoader />
                    <CourseCategoryLoader />
                    <CourseCategoryLoader />
                    <CourseCategoryLoader />
                </div>
            </div>
        );
    }

    if (CourseError) return <h1>{CourseErrorMsg.message}</h1>;

    if (CategoryCoursesList.data?.length < 1) {
        return (
            <div className='w-full max-h-screen h-96 flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='my-7 text-2xl font-bold'>We Don't have course with this topics! yet</h1>
                    <Link to='/'>
                        <Button>Check other courses</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='py-4 px-4 grid grid-flow-row-dense grid-col-12'>
            <div>
                {courseSubCategory ? <h1 className='p-4 text-xl'>{`${courseCategory} / ${courseSubCategory}`} Courses</h1> : <h1 className='p-4 text-xl'>{courseCategory} Courses</h1>}
                <h2>Courses to get you started</h2>
            </div>
            <div className='grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className='col-span-3 lg:col-span-4'>
                    <SortCourses order={setOrder} />
                </div>
                <div className='col-span-1'>
                    <CourseFilter filterprops={Clickedfilter} duration={setDuration} price={setPrice} level={setLevel} subCategory={setCategory} language={setlanguage} />
                </div>
                <div className='col-span-3 lg:col-span-4'>
                    {CategoryCoursesList.data?.map(({ headline, id, image_480x270, url, visible_instructors, price_detail }) => (
                        <NavLink className='pr-4' to={`${url}${id}`} key={id}>
                            <Course status={CategoryCoursesStatus} headline={headline} id={id} image_480x270={image_480x270} url={url} visible_instructors={visible_instructors} price={price_detail} />
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategorieCourses;
