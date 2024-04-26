import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFirebaseAuthentication from './useFirebaseAuthentication'
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data: courses, isLoading, isError, error } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => axios.get("/api/courses").then(res => res.data),
    staleTime: Infinity
  });
  const User=useFirebaseAuthentication()
  return (
    <DataContext.Provider
      value={{
        CoursesData: {
          data: courses,
          isLoading: isLoading,
          isError: isError,
          error: error
        },
        User
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
