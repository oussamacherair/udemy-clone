import React, { useEffect } from 'react'
import axios from 'axios'
function Coursers_Feed() {

    useEffect(() => {
        const fetch=async ()=>
        {
            axios("https://www.udemy.com/api-2.0/courses/3969094/reviews", {
                headers: {
    
                    "Authorization": "Basic MnhoS2tPOEFNY1NnaDJlOEFMeUtxUG1xVENFREVWUjNubk9EQjFIcTpNbWhpaVpTNlhxQUxWRVRTME9BSE1vcWxLYVpKS29kZUllVFZIQkljNm9ZWnFZOUxvaGN5akRvdGQ1bGFOZ1oyT3B3bnZMejI2SVlaemlyYXAzR0c5Z2F2bVhHWGMzZXlFUjZPYXpOWVdGVmdNMjBVdGtiSGFGYTExVDNQaE9RdA==",
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
    
                },
                params:
                {
                    page: 1,
                    page_size: 1
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err.message))
        }
        fetch()
    },[fetch])

    return (
        <h1>
            course
        </h1>
    )
}

export default Coursers_Feed