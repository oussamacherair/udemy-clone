import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { IoIosArrowForward, IoMdPhonePortrait } from "react-icons/io";
import { GoInfinity } from "react-icons/go";
import {
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaHeart,
  FaTrophy
} from "react-icons/fa";
import { RiFolderDownloadLine } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { IconButton, Button } from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { MdSubtitles, MdOutlineOndemandVideo } from "react-icons/md";
import { NumericFormat } from "react-number-format";
import Sponsers from "./Sponsers";
import { doc,collection,addDoc} from "@firebase/firestore";
import { db, auth } from "../firebase.config";
import { price } from "../../BackendData/functions/functions";

function CourseCurriculumData({
  id,
  title,
  description,
  primary_category,
  sub_category,
  rating,
  reviews,
  students,
  headline,
  teacher,
  created,
  local,
  lectures,
  quizzes,
  sectionNumber,
  image_480x270,
  dbCourses,
  reloadDb
}) {
  const reviewStar = rate => {
    let stars;

    if (rate === 5) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 text-sm ">
          <FaStar />
          <FaStar className="mx-[2px] " />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaStar />
        </div>
      );
    } else if ((rate > 4) & (rate < 5)) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 ">
          <FaStar />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaStarHalfAlt />
        </div>
      );
    } else if (rate == 4) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 ">
          <FaStar />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    } else if ((rate > 3) & (rate < 4)) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 ">
          <FaStar />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaStarHalfAlt className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    } else if (rate == 3) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 ">
          <FaStar />
          <FaStar className="mx-[2px]" />
          <FaStar className="mx-[2px]" />
          <FaStarHalfAlt className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    } else if ((rate > 2) & (rate < 3)) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 ">
          <FaStar />
          <FaStar className="mx-[2px]" />
          <FaStarHalfAlt className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    } else if (rate == 2) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800 ">
          <FaStar />
          <FaStar className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    } else if ((rate > 1) & (rate < 2)) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800">
          <FaStar />
          <FaStarHalfAlt className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    } else if (rate == 1) {
      stars = (
        <div className="flex justify-between items-center text-yellow-800">
          <FaStar />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar className="mx-[2px]" />
          <FaRegStar />
        </div>
      );
    }

    return stars;
  };
  const random_number = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const nameOftheTeacher = teacher?.map(name => name?.title);
  const formatDate = dateString => {
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  let [hour, min] = String(lectures / 10)
    ?.replace(".", "")
    ?.split("");

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

  const discountprice = price(25, 100);

  return (
    <div>
      <div className="lg:px-20">
        <div>
          <div className="bg-[#2d2f31] text-white lg:pb-8 lg:pt-4 lg:pr-44">
            <div className="p-4 text-[#c0c4fc] text-xs md:text-sm lg:text-lg lg:font-bold text-wrap">
              <p>
                {primary_category}{" "}
                <IoIosArrowForward className="text-gray-400 inline" />
                {sub_category}{" "}
                <IoIosArrowForward className="text-gray-400 inline" />
                {title}
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full h-auto block lg:hidden"
                src={image_480x270}
                alt={image_480x270}
              />
              <div className="absolute flex lg:hidden font-black flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50">
                <IoPlayCircleSharp size={60} className="" />
                <h1 className="text-2xl">Preview this Course</h1>
              </div>
              <div className="absolute block lg:hidden top-0 w-full h-full bg-black/40"></div>
            </div>

            <div className="p-5">
              <div>
                <h1 className="font-black text-lg md:text-3xl py-1">{title}</h1>
                <h2 className="text-xs md:text-sm lg:text-2xl line-clamp-2 font-thin">
                  {headline}
                </h2>

                <div className="py-1 mb-2 text-xs md:text-base lg:text-lg">
                  <div className="flex flex-wrap space-x-2 py-1 md:text-base  lg:text-lg ">
                    <h2 className="text-yellow-800 ">{rating?.toFixed(1)}</h2>
                    {reviewStar(rating)}
                    <h2 className="text-[#c0c4fc] underline">
                      (
                      <NumericFormat
                        displayType="text"
                        value={reviews}
                        thousandSeparator=","
                      />{" "}
                      ratings)
                    </h2>
                    <h2 className="">
                      <NumericFormat
                        displayType="text"
                        className=""
                        value={students}
                        thousandSeparator=","
                      />{" "}
                      students
                    </h2>
                  </div>

                  <p>
                    Created by{" "}
                    {nameOftheTeacher?.map(el => (
                      <span className="text-[#c0c4fc] underline cursor-pointer mx-1">
                        {el}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="block md:flex space-x-2 md:text-lg text-sm">
                  <p className="flex items-center">
                    <FaInfoCircle className="mr-1" />
                    Created {formatDate(created)}
                  </p>
                  <p className="flex items-center">
                    <GrLanguage className="mr-1" />
                    {local?.simple_english_title}
                  </p>
                  <p className="flex items-center">
                    <MdSubtitles className="mr-1" />
                    {local?.title}
                  </p>
                </div>
              </div>

              <div className="py-3 block lg:hidden">
                <h3 className="text-lg md:text-xl font-bold">
                  ${discountprice}.99
                </h3>
              </div>

              <div>
                <div className="flex lg:hidden flex-row items-center space-x-1">
                  <Button
                    onClick={()=>addCoursesToCart(id)}
                    disabled={checkCourse(id)}
                    className="bg-[#5624d0] rounded-none py-4   w-full md:w-auto">
                    Add to Cart
                  </Button>
                  <IconButton className="rounded-none bg-[#5624d0]">
                    <FaHeart />
                  </IconButton>
                </div>

                <p className="py-1 block  text-sm text-center lg:hidden">
                  30-Day Money-Back Guarantee
                </p>

                <div className="flex lg:hidden justify-between items-center py-4 text-sm text-center">
                  <p className="border-b border-[#c0c4fc]">Share</p>
                  <p className="border-b border-[#c0c4fc]">Gift this Course</p>
                  <p className="border-b border-[#c0c4fc]">Apply Coupon</p>
                </div>
              </div>
            </div>
          </div>
          <Sponsers />
          <div className="p-5">
            <div className="border-2 p-5">
              <h1 className="text-2xl font-block">What you'll learn</h1>
              <div
                className="InnerHTMLClasses"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>

            <div className="py-5">
              <h1>This course includes:</h1>
              <p className="flex items-center">
                <RiFolderDownloadLine className="mr-2" />
                {lectures / 10} hours on-demand video
              </p>
              <p className="flex items-center">
                <MdOutlineOndemandVideo className="mr-2" />
                {lectures} downloadable resources
              </p>
              {quizzes ? (
                <p className="flex items-center">
                  <MdQuiz className="mr-2" />
                  {quizzes} Quizzes
                </p>
              ) : (
                ""
              )}
              <p className="flex items-center">
                <IoMdPhonePortrait className="mr-2" /> Access on mobile and TV
              </p>
              <p className="flex items-center">
                <GoInfinity className="mr-2" /> Full lifetime access
              </p>
              <p className="flex items-center">
                <FaTrophy className="mr-2" /> Certificate of completion
              </p>
            </div>
          </div>
          <div className="p-5">
            <div>
              <h1 className="text-2xl font-bold py-4">Course Content</h1>
              <p className="text-xs md:text-sm  ">
                <span className="">{sectionNumber} sections</span>
                <LuDot className=" text-xl inline" />
                <span className="">{lectures} lectures</span>
                <LuDot className=" inline text-xl" />
                <span>
                  {hour < 10 ? `0${hour}` : hour}h {min < 10 ? `0${min}` : min}m
                  total length
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCurriculumData;
