import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

import CourseCurriculumData from './CourseCurriculumData'
import Record from './Record'
import Coursesimilar from './Coursesimilar'

function Coursecurriculum() {
    const getCourseCurriculum = async (couseId) => {
        const response = await axios.get(`https://www.udemy.com/api-2.0/courses/${couseId}/public-curriculum-items/?page=1&page_size=100`)
        const { results } = response.data
        return results
    }
    const fetchCourse = async (courseId) => {
        const response = await axios.get(`https://www.udemy.com/api-2.0/courses/${courseId}?fields[course]=title,headline,num_lectures,num_subscribers,price,primary_category,locale,image_480x270,created,description,avg_rating,num_lectures,num_quizzes,num_reviews,num_subscribers,primary_subcategory,visible_instructors,locale,status_label`);
        const { data } = response
        return data
    }
    let { courseid } = useParams()

    const curriculumData = useQuery({
        queryKey: ['Curriculum', courseid],
        queryFn: () => getCourseCurriculum(courseid),
    })

    const CourseData = useQuery({
        queryKey: ['Course', courseid],
        queryFn: async () => await fetchCourse(courseid),
    })
    if (curriculumData.isLoading & CourseData.isLoading) return <h1>Loading...</h1>
    if (curriculumData.isError & CourseData.isError) return <h1>{JSON.stringify(curriculumData.error)}{JSON.stringify(CourseData.error)}</h1>
    let { data: Curriculum } = curriculumData
    let { data: Course } = CourseData
    let ChapterNumber = 0
    let ClassifiedData = []
    Curriculum?.map(lecture => {
        if (lecture?._class !== 'lecture') return ChapterNumber++
    })
    Curriculum?.map(lesson => {
        if (!!lesson) {
            if (lesson._class === "chapter") {
                return ClassifiedData?.push({ lesson, lesson_lecture: [] })
            }
            else {
                return ClassifiedData[ClassifiedData.length - 1].lesson_lecture?.push(lesson)
            }
        }
    })



    return (
        <div>
            <CourseCurriculumData
                title={Course?.title}
                image_480x270={Course?.image_480x270}
                primary_category={Course?.primary_category.title}
                description={Course?.description}
                sub_category={Course?.primary_subcategory.title}
                headline={Course?.headline}
                rating={Course?.avg_rating}
                reviews={Course?.num_reviews}
                students={Course?.num_subscribers}
                teacher={Course?.visible_instructors}
                created={Course?.created}
                local={Course?.locale}
                lectures={Course?.num_lectures}
                quizzes={Course?.num_quizzes}
                sectionNumber={ChapterNumber}
            />
            <Record data={ClassifiedData} />
            <Coursesimilar primary_category={Course?.primary_category.title}/>

        </div>

    )
}

export default Coursecurriculum