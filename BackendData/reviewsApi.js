import axios from "axios";
const headers = {
    "Authorization": "Basic MnhoS2tPOEFNY1NnaDJlOEFMeUtxUG1xVENFREVWUjNubk9EQjFIcTpNbWhpaVpTNlhxQUxWRVRTME9BSE1vcWxLYVpKS29kZUllVFZIQkljNm9ZWnFZOUxvaGN5akRvdGQ1bGFOZ1oyT3B3bnZMejI2SVlaemlyYXAzR0c5Z2F2bVhHWGMzZXlFUjZPYXpOWVdGVmdNMjBVdGtiSGFGYTExVDNQaE9RdA=="
};

export async function fetchReviews(courseId) {
    const response = await axios.get(`https://www.udemy.com/api-2.0/courses/${courseId}/reviews`, { headers });
    const { results } = response.data;
    return results;
}

