import axios from "axios";
const headers = {
  "Authorization": "Basic MnhoS2tPOEFNY1NnaDJlOEFMeUtxUG1xVENFREVWUjNubk9EQjFIcTpNbWhpaVpTNlhxQUxWRVRTME9BSE1vcWxLYVpKS29kZUllVFZIQkljNm9ZWnFZOUxvaGN5akRvdGQ1bGFOZ1oyT3B3bnZMejI2SVlaemlyYXAzR0c5Z2F2bVhHWGMzZXlFUjZPYXpOWVdGVmdNMjBVdGtiSGFGYTExVDNQaE9RdA=="
};

/*****getting all courses */
export const fetchCourses = async () => {
  const response = await axios.get(`https://www.udemy.com/api-2.0/courses/?page=1&page_size=12`, { headers: headers });
  const { results } = response.data
  return results
};
       
/*****getting course */
export const fetchCourse = async (courseId) => {
  const response = await axios.get(`https://www.udemy.com/api-2.0/courses/${courseId}?fields[course]=title,headline,num_lectures,num_subscribers,price,primary_category,locale,image_480x270,created,description,avg_rating,num_lectures,num_quizzes,num_reviews,num_subscribers,primary_subcategory,visible_instructors,locale,status_label`);
  const { data } = response
  return data
}
/*****course Curriculum */
export  const getCourseCurriculum =async (couseId)=>  {
  const response = await axios.get(`https://www.udemy.com/api-2.0/courses/${couseId}/public-curriculum-items/?page=1&page_size=100`,{ headers: headers })
  const { results } = response.data
  return results
}

/****similar courses */
export const getCoursesimilar = async (primary_category, page = 1) => {
  const response = await axios.get(`https://www.udemy.com/api-2.0/courses/?category=${encodeURIComponent(primary_category)}&page=${page}&page_size=15`, { headers: headers })
 const { results } = response.data
   return results
}



/*********courses filter calls */


export const CatsCourse = async (primary_category, subCategory, duration, price, level, language, order, search) => {

  const apiUrl = search
    ? `https://www.udemy.com/api-2.0/courses/?page=1&page_size=30&search=${search}&duration=${duration||'short'}&price=${price||'price-paid'}&instructional_level=${level||'all'}&language=${language||'en'}&ordering=${order||'relevance'}`
    : (subCategory
      ? `https://www.udemy.com/api-2.0/courses/?subcategory=${subCategory}&duration=${duration || 'short'}&page_size=30&price=${price || 'price-paid'}&instructional_level=${level || 'all'}&language=${language || 'en'}&ordering=${order || 'relevance'}`
      : `https://www.udemy.com/api-2.0/courses/?category=${primary_category}&duration=${duration || 'short'}&page_size=20&price=${price || 'price-paid'}&instructional_level=${level || 'all'}&language=${language || 'en'}&ordering=${order || 'relevance'}`);

  try {
    const response = await axios.get(apiUrl, { headers: headers });
    const { results } = response.data;
    return results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
};

// Example usage:
// CatsCourse('development', 'web-development', 'short', 'price-free', 'beginner', 'en', 'relevance', 'javascript');




