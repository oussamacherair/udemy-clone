import axios from "axios";


export async function fetchCategories() {
    const response = await axios.get(`https://www.udemy.com/api-2.0/course-categories`)
    const { results } = response.data
    return results
};



export async function fetchSubCategories ()  {
    const response = await axios.get('https://www.udemy.com/api-2.0/structured-data/navigation-lists/?list_ids=ud-main&locale=en_US')
    const { items } = response.data['ud-main']
    return items
}




