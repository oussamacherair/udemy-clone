import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiFolderDownloadLine } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdQuiz } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { GoInfinity } from "react-icons/go";
import { IconButton, Button } from "@material-tailwind/react";
import { FaTrophy, FaHeart } from "react-icons/fa";
import { doc, collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config";
import { price } from "../../../BackendData/functions/functions";
function CourseSideBar({
  image_480x270,
  lectures,
  quizzes,
  title,
  rating,
  teacher,
  id,
  sectionNumber,
  reviews,
  dbCourses,
  reloadDb,
  Verified
}) {
  let [hour, min] = String(lectures / 10)
    ?.replace(".", "")
    ?.split("");
  const discountprice = price(25, 100);
  const origianlprice = price(70, 190);

  /*****add course function */
  const addCoursesToCart = async () => {
    try {
      const userDocRef = doc(db, "users", auth.currentUser.email);
      const coursesCollectionRef = collection(userDocRef, "courses");
      const nameOftheTeacher = teacher?.map(name => name?.title);

      await addDoc(coursesCollectionRef, {
        title,
        rating,
        nameOftheTeacher,
        image_480x270,
        discountprice,
        id,
        lectures,
        quizzes,
        sectionNumber,
        reviews
      });
      reloadDb();
    } catch (err) {
      alert(err);
    }
  };

  const checkCourse = ID => {
    if (dbCourses.some(course_id => ID == course_id)) return true;
    return false;
  };

  return (
    <div className="absolute lg:block hidden top-12 right-12 bg-slate-900	border-2 border-white w-1/4 shadow-md">
      <div>
        <div className="relative">
          <img
            className="w-full h-auto "
            src={image_480x270}
            alt={image_480x270}
          />
          <div className="absolute hidden lg:flex font-black flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50">
            <IoPlayCircleSharp size={60} className="" />
            <h1 className="text-lg">Preview this Course</h1>
          </div>
          <div className="absolute block  top-0 w-full h-full bg-black/40"></div>
        </div>
        <div className=" py-4 px-4">
          <div className="my-2 py-4 flex text-3xl items-center">
            <h3 className="mr-3">${discountprice}.99</h3>
            <h3 className="text-gray-600 leading-7 text-lg font-semibold  line-through">
              ${origianlprice}.99
            </h3>
          </div>
          <div>
            {Verified ? (
              <div
                className={`flex flex-row items-center justify-between space-x-2 ${
                  checkCourse(id) ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <Button
                  onClick={() => addCoursesToCart(id)}
                  disabled={checkCourse(id)}
                  size="lg"
                  className="bg-[#5624d0] rounded-none flex-grow   w-full md:w-auto"
                >
                  Add to Cart
                </Button>
                <IconButton
                  size="lg"
                  className="rounded-none text-lg"
                  variant="outlined"
                >
                  <FaHeart />
                </IconButton>
              </div>
            ) : (
              <p>Please verify you email</p>
            )}

            <Button
              className=" my-4 w-full focus:outline-none rounded-none text-lg"
              variant="outlined"
              size="lg"
              onClick={() => addCoursesToCart(id)}
              disabled={checkCourse(id)}
            >
              Buy Now
            </Button>
            <p className="py-1 block  text-sm text-center">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className="py-5 text-xl">
            <h1>This course includes:</h1>
            <p className="flex items-center mb-2">
              <RiFolderDownloadLine className="mr-2" />
              {lectures / 10} hours on-demand video
            </p>
            <p className="flex items-center mb-2">
              <MdOutlineOndemandVideo className="mr-2" />
              {lectures} downloadable resources
            </p>
            {quizzes ? (
              <p className="flex items-center mb-2">
                <MdQuiz className="mr-2" />
                {quizzes} Quizzes
              </p>
            ) : (
              ""
            )}
            <p className="flex items-center mb-2">
              <IoMdPhonePortrait className="mr-2" /> Access on mobile and TV
            </p>
            <p className="flex items-center mb-2">
              <GoInfinity className="mr-2" /> Full lifetime access
            </p>
            <p className="flex items-center mb-2">
              <FaTrophy className="mr-2" /> Certificate of completion
            </p>
          </div>

          <div>
            <div className=" flex justify-between items-center py-4 text-sm text-center">
              <p className="border-b border-[#c0c4fc]">Share</p>
              <p className="border-b border-[#c0c4fc]">Gift this Course</p>
              <p className="border-b border-[#c0c4fc]">Apply Coupon</p>
            </div>
          </div>
        </div>
        <div className=" border-b-0 border-l-0 border-r-0 border-t border-gray-300 border-2 p-4 ">
          <h1 className="text-xl font-black py-2">
            Training 5 or more people?
          </h1>
          <p>
            Get your team access to 25,000+ top Udemy courses anytime, anywhere.
          </p>
          <Button
            variant="outlined"
            size="lg"
            className="rounded-none text-xl w-full my-4 capitalize"
          >
            Udemy Business
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseSideBar;
