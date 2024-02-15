import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

async function fetchCategories() {
    const response = await axios.get(`https://www.udemy.com/api-2.0/course-categories`)
    const { results } = response.data
    return results
};

async function fetchSubCategories ()  {
    const response = await axios.get('https://www.udemy.com/api-2.0/structured-data/navigation-lists/?list_ids=ud-main&locale=en_US')
    const { items } = response.data['ud-main']
    return items
}

export function CategoriesApi() {
    const Cats = useQuery({
        queryKey: ['Categories'],
        queryFn:  fetchCategories,
        staleTime: Infinity
    })
    return Cats
}
export function SubCatgoriesAPi() {
    const subCats = useQuery({
        queryKey: ['SubCategories'],
        queryFn:  fetchSubCategories,
        staleTime: Infinity
    })
    return subCats
}
