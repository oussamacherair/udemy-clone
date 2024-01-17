import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
async function fetchCategories() {
    const response = await axios.get(`https://www.udemy.com/api-2.0/course-categories`)
    const { results } = response.data
    return results
};
fetchCategories()

export function CategoriesApi() {
 const Cats = useQuery({
        queryKey: ['Categories'],
        queryFn: fetchCategories,
        staleTime: Infinity
    })
    return Cats
}
