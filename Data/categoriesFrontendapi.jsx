import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

export function CategoriesApi() {
    const Cats = useQuery({
        queryKey: ['Categories'],
        queryFn: async ()=> await axios.get('/api/categories')
        .then((response)=> response.data),
        staleTime: Infinity
    })
    return Cats
}

export function SubCatgoriesAPi() {
    const subCats = useQuery({
        queryKey: ['SubCategories'],
        queryFn: async ()=> await axios.get('/api/Subcategories')
        .then((response)=> response.data),
        staleTime: Infinity,
    })
    return subCats
}



















//https://www.thumbzilla.com/tags/anime-big-ass
