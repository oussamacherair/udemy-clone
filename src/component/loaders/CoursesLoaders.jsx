import React from 'react'
import { Typography } from "@material-tailwind/react";
export function CoursesLoaders() {
    return (
        <div className="max-w-sm min-w-full  rounded overflow-hidden shadow-lg bg-white p-6 m-4">
            <div className="animate-pulse h-32 bg-gray-300 mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-300 w-2/3 mb-2"></div>
            <div className="animate-pulse h-4 bg-gray-300 w-1/2"></div>
        </div>
    )
}



export const TextBoxLoading = () => {
    return (
        <div className="max-w-sm min-w-full rounded ">
            <div className="animate-pulse h-4 bg-gray-300 w-1/2"></div>
        </div>
    );
};

 
export const Filterloaders=()=> {
  return (
    <div className="max-w-full animate-pulse mb-20">
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-56 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
}




export const CourseCategoryLoader=()=>
{
 

  return (
    <div className="flex animate-pulse flex-wrap items-center gap-8 w-full">
      <div className="grid h-44 w-44 place-items-center my-4 bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 w-12 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      <div className="w-80">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-3   bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2   bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2   bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2   bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2   bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2   bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2   bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
    </div>
  );
}


