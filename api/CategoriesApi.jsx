import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
async function fetchCategories() {
    const response = await axios.get(`https://www.udemy.com/api-2.0/course-categories`)
    const { results } = response.data
    return results
};
fetchCategories()

function CategoriesApi() {
    const Cats = useQuery({
        queryKey: ['Categories'],
        queryFn: fetchCategories,
        staleTime: Infinity
    })
    if (Cats.isLoading) return <h1>Loading Data</h1>
    if (Cats.isError) return <h1>{JSON.stringify(Cats.error)}</h1>
    return (
        <div className="flex flex-wrap">
            {Cats.data.map((cat, i) => (
                <p key={i} className='text-sm px-2 py-2 mx-2 mb-2 font-bold text-gray-600 bg-gray-100 hover:text-black cursor-pointer'>{cat.title}</p>
            ))}
        </div>

    )
}

export default CategoriesApi