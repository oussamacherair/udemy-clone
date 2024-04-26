import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";

/***random Courses api*/
export async function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => async () => {
      const response = await axios.get("/api/courses");
      return response; // Return the data from the response
    },
    staleTime: Infinity
  });
}

//****firebase cart courses api */

export async function getCartCourses(user) {
  try {
    const dbCourses = await axios.get("/api/Account/Cart/Courses", {
      params: {
        email: user
      }
    });
    return dbCourses;
  } catch (err) {
    return err;
  }
}

/*******firebase PaidCourses */

export async function getPaidCourses(user) {
  try {
    const PdCourses = await axios.get("/api/Profile/learning", {
      params: {
        email: user
      }
    });
    return PdCourses;
  } catch (err) {
    return err;
  }
}
