import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CourseCurriculumData from "./CourseCurriculumData";
import Record from "../Reviews/Record";
import Coursesimilar from "./Coursesimilar";
import Pagination from "../navigation/Pagination";
import CourseSideBar from "./CourseSideBar";
import {
  getCartCourses,
  getPaidCourses
} from "../../../Data/CoursesFrontendApi";
import DataContext from "../../../Data/Contaxt";

function Coursecurriculum() {
  const { User } = useContext(DataContext);

  const [currentPage, setPageNumber] = useState(1);
  let { courseid } = useParams();
  const user = User ? User.email : null;
  const emailVerified = user ? User.emailVerified : null;
  
  const {
    data: CartCoursesIDS,
    isLoading: loadingIds,
    isError: ErrorIds,
    error: errorIdsMessage,
    refetch
  } = useQuery({
    queryKey: ["CartCourseId", user],
    queryFn: async () =>
      await getCartCourses(user)
        .then(res => res.data)
        .catch(err => err.message),
        enabled:!!User
  });

  const {
    data: PaidCoursesIDS,
    isLoading: loadingPaid,
    isError: ErrorPaid,
    error: errorPaidMessage
  } = useQuery({
    queryKey: ["PaidCourseId", user],
    queryFn: async () =>
      getPaidCourses(user)
        .then(res => res.data)
        .catch(err => err.message),
        enabled:!!User
  });

  const {
    data: CurriculumData,
    isLoading: CurriculumLoading,
    isError: CurriculumError,
    error: CurriculumErrorMassage
  } = useQuery({
    queryKey: ["Curriculum", courseid],
    queryFn: async () =>
      await axios
        .get(`/api/course/${courseid}/curriculum-items`)
        .then(response => response)
  });

  const {
    data: CourseData,
    isLoading: CourseLoading,
    IsError: CourseError,
    error: CoursesErrorMassage
  } = useQuery({
    queryKey: ["Course", courseid],
    queryFn: async () =>
      axios.get(`/api/course/${courseid}`).then(response => response)
  });

  if (CourseLoading && CurriculumLoading && loadingIds && loadingPaid) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  if (CurriculumError && CourseError && ErrorIds && ErrorPaid)
    return (
      <h1>
        {JSON.stringify(CoursesErrorMassage.message)}
        {JSON.stringify(CurriculumErrorMassage.message)}
        {JSON.stringify(errorIdsMessage.message)}
        {JSON.stringify(errorPaidMessage.message)}
      </h1>
    );

  let ChapterNumber = 0;
  let ClassifiedData = [];
  let CurriculumCourseData = CurriculumData?.data;
  let CourseDetailedData = CourseData?.data;

  CurriculumCourseData?.map(lecture => {
    if (lecture?._class !== "lecture") return ChapterNumber++;
  });
  CurriculumCourseData?.map(lesson => {
    if (!!lesson) {
      if (lesson._class === "chapter") {
        return ClassifiedData?.push({ lesson, lesson_lecture: [] });
      } else {
        return ClassifiedData[ClassifiedData.length - 1].lesson_lecture?.push(
          lesson
        );
      }
    }
  });

  const ids = () => {
    let cartIds =
      CartCoursesIDS && CartCoursesIDS?.length
        ? CartCoursesIDS.map(course => +course.id)
        : [];
    let paidIds =
      PaidCoursesIDS && PaidCoursesIDS?.length
        ? PaidCoursesIDS.map(course => +course.id)
        : [];
    if (cartIds.length || paidIds.length) {
      return [...cartIds, ...paidIds];
    }

    return [];
  };
console.log(User)
  return (
    <div className="block lg:grid grid-flow-row-dense grid-cols-4 relative">
      <div className="col-span-3 relative">
        <CourseCurriculumData
          id={CourseDetailedData?.id}
          title={CourseDetailedData?.title}
          image_480x270={CourseDetailedData?.image_480x270}
          primary_category={CourseDetailedData?.primary_category.title}
          description={CourseDetailedData?.description}
          sub_category={CourseDetailedData?.primary_subcategory.title}
          headline={CourseDetailedData?.headline}
          rating={CourseDetailedData?.avg_rating}
          reviews={CourseDetailedData?.num_reviews}
          students={CourseDetailedData?.num_subscribers}
          teacher={CourseDetailedData?.visible_instructors}
          created={CourseDetailedData?.created}
          local={CourseDetailedData?.locale}
          lectures={CourseDetailedData?.num_lectures}
          quizzes={CourseDetailedData?.num_quizzes}
          sectionNumber={ChapterNumber}
          dbCourses={ids()}
          reloadDb={refetch}
          Verified={emailVerified}
        />
        <Record data={ClassifiedData} />

        <Coursesimilar
          primary_category={CourseDetailedData?.primary_category.title}
          page={currentPage}
        />
      </div>
      <CourseSideBar
        image_480x270={CourseDetailedData?.image_480x270}
        lectures={CourseDetailedData?.num_lectures}
        quizzes={CourseDetailedData?.num_quizzes}
        sectionNumber={ChapterNumber}
        reviews={CourseDetailedData?.num_reviews}
        title={CourseDetailedData?.title}
        rating={CourseDetailedData?.avg_rating}
        teacher={CourseDetailedData?.visible_instructors}
        id={CourseDetailedData?.id}
        dbCourses={ids()}
        reloadDb={refetch}
        Verified={emailVerified}
      />

      <Pagination updatePage={setPageNumber} />
    </div>
  );
}

export default Coursecurriculum;
