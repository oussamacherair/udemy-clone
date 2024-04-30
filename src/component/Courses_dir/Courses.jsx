import Course from './Course';
import Slider from "react-slick";
import { useContext } from 'react';
import DataContext from '../../../Data/Contaxt';
import { NavLink } from 'react-router-dom';



  
let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

function Courses() {
    const {CoursesData}=useContext(DataContext)
    if (CoursesData.isLoading ) return <h1>Loading courses</h1>;
    if (CoursesData.isError || !!CoursesData.isError) return <h1>{CoursesData.error.message}</h1>;
   let Courses_details=CoursesData.data
    return (
        <>
           { <Slider {...settings}>
                {Courses_details.map(course =>
                (
                  <NavLink to={`${course.url}${course.id}`}>
                    <Course key={course.id} {...course} />
                    </NavLink>
                ))}

            </Slider>
                }
        </>
    )
}

export default Courses
