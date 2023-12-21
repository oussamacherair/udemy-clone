import { useQueries } from "@tanstack/react-query";
import { fetchReviews } from "../../api/reviewsApi";
import { useContext } from 'react';
import DataContext from '../../Data/Contaxt';
import Review from "./Review";
import Slider from "react-slick";

const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    slidesToScroll: 1,
};

function Reviews() {
    const { CoursesData } = useContext(DataContext)
    if (CoursesData.isLoading) return <h1>Loading data</h1>
    if (CoursesData.isError) return <h1>{error}</h1>
    let ids = CoursesData.data.map(course => course.id)
    let courseName = CoursesData.data.map(course => course.headline)
    const reviews = useQueries({
        queries: ids.map((id) => {
            return {
                queryKey: ['review', id],
                queryFn: () => fetchReviews(id),
                staleTime: Infinity
            }
        })
    })
    if (reviews.some((query) => query.isLoading)) return <h1>Loading reviews</h1>;
    if (reviews.some((query) => query.isError)) return <h1>Error fetching reviews</h1>;
    let reviewsData = reviews.flatMap(el => el.data).filter(el => el.content !== '' & el.content.length > 7)
    reviewsData.map((review, index) => { review.course = courseName[index], review })


    return (
        <div className='px-5 pt-10 bg-gray-100 my-8'>
            <div>
                <h1 className='text-2xl font-bold pb-6'>How learners like you are achieving their goals</h1>
            </div>
            <div className="py-8">
                <Slider {...settings}>
                    {reviewsData.map((review) => (
                        <Review key={review.id} {...review} />

                    ))}
                </Slider>



            </div>
        </div>
    )
}

export default Reviews