import Course from './Course';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import DataContext from '../../Data/Contaxt';

  
const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
};


function Courses() {
    const {CoursesData}=useContext(DataContext)
    if (CoursesData.isLoading) return <h1>Loading courses</h1>;
    if (CoursesData.isError) return <h1>{error.message}</h1>;
    return (
        <>
            <Slider {...settings}>
                {CoursesData.data.map(course =>
                (
                    <Course key={course.id} {...course} />
                ))}

            </Slider>

        </>
    )
}

export default Courses