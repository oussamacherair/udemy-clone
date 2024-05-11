import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconButton } from "@material-tailwind/react";
function LearningCourse({ image, title, teacher }) {
  let CourseTutor = teacher.map(tut => tut.stringValue);

  return (
    <div className="p-10 relative">
      <div>
        <div className="relative">
          <img src={image} alt={image} className="-z-10 w-full" />
          <div className="absolute top-5 right-5 z-20">
            <IconButton size="md" className="bg-white text-gray-700 h-14 w-14">
              <BsThreeDotsVertical size={30} />
            </IconButton>
          </div>
        </div>
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{CourseTutor.map(el => el)}</h2>
      </div>
    </div>
  );
}

export default LearningCourse;
