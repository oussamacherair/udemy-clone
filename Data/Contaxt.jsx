import { createContext } from "react";
import { useCourses } from "../api/CoursesApi";


const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const { data: courses, isLoading, isError, error } = useCourses();
    return <DataContext.Provider value={{ CoursesData: { data: courses, isLoading: isLoading, isError: isError, error: error } }}>
        {children}
    </DataContext.Provider>
}
export default DataContext