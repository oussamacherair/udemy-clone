import React from "react";
import {Menu,MenuHandler,MenuList,MenuItem,Button} from "@material-tailwind/react";
import { auth } from "../../firebase.config";
import { useQuery } from "@tanstack/react-query";
import LearningCourse from "./LearningCourse";
import Sponsers from "../Reviews/Sponsers";
import { useNavigate } from "react-router";
import { getPaidCourses } from "../../../Data/CoursesFrontendApi";

function Learning() {
  let navigate=useNavigate()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["PaidCourses"],
    queryFn: async () => getPaidCourses(auth.currentUser.email)
    .then(res=>res.data)
    .catch(err=>err.message)

  });
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  if (isError) return <h1>{error.message}</h1>;
  let LearningCourses = data;
  return (
    <div className="">
      <div className="px-8 md:pt-8  bg-gray-800 text-white">
        <div className="w-full  mx-auto">
          <h1 className="text-[3rem]  ">My Learning</h1>
          <div className="text-2xl font-bold mt-8">
            <ul className="list-none hidden space-x-8 none md:flex">
              <li className="cursor-pointer border-b-8 border-white text-white">
                All Courses
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                My lists
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Wishlist
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Archived
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Learn Ingtools
              </li>
            </ul>
            <div className="flex justify-between items-center md:hidden mt-8">
              <h2 className="cursor-pointer inline-block text-white text-xl">
                All Courses
              </h2>
              <div>
                <Menu
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 }
                  }}
                  ripple={false}
                >
                  <MenuHandler>
                    <Button
                      ripple={false}
                      className="bg-red-900 bg-transparent rounded-none "
                    >
                      other
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>My lists</MenuItem>
                    <MenuItem>Wishlist</MenuItem>
                    <MenuItem>Archived</MenuItem>
                    <MenuItem>Learn Ingtools</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          LearningCourses.length
            ? "grid grid-row-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            : "flex flex-col justify-center items-center"
        }
      >
        {LearningCourses.length ? (
          LearningCourses.map(course => (
            <LearningCourse
              image={course.image}
              title={course.title}
              teacher={course.teacher}
            />
          ))
        ) : (
          <div className='flex flex-col justify-center items-center h-96'>
            <h1 className="font-bold text-2xl">
              Start learning from over 210,000 courses today.
            </h1>
            <p className='text-2xl mt-4'>
              When you purchase a course, it will appear here.
              <span className="text-purple-600 border-b-2 border-purple-600 font-bold cursor-pointer" onClick={()=>navigate('/')}>Browse Here</span>
            </p>
          </div>
        )}

        
      </div>
      <Sponsers/>
    </div>
  );
}

export default Learning;
