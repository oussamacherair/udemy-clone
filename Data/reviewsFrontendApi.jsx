import React, { useContext } from 'react'
import { useQueries } from '@tanstack/react-query'
import axios from "axios";
import DataContext from './Contaxt';



export function reviewsFrontendApi() {
    const {CoursesData:{data,isLoading,isError,error}} = useContext(DataContext)
  

    
    if (isLoading) return {Loading:isLoading}
    if (isError) return {Error:CoursesData.isError,content:CoursesData.error.massage}
    let coursesApi = data
    let ids = coursesApi?.map(course => course.id)
    let courseName = coursesApi?.map(course => course.headline).filter(course => course.headline !== '')
  
    const reviews = useQueries({
        queries: ids?.map((id) => {
            return {
                queryKey: ['review', id],
                queryFn:  () =>  axios.get(`/api/course/${id}/review`),
                staleTime: Infinity
            }
        })
    })
    return reviews
    
}

