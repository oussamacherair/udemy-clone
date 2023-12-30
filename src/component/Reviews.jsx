import { useQueries } from "@tanstack/react-query";
import { fetchReviews } from "../../api/reviewsApi";
import { useContext } from 'react';
import DataContext from '../../Data/Contaxt';
import Review from "./Review";
import Slider from "react-slick";
/*https://www.udemy.com/api-2.0/discovery-units/bestseller/?apply_campaign_filter=False&context=home&fft=skills_hub_top_new_beginner&fl=lbl&is_content_rankable=False&label_id=7380&member_of=skills_hub_top_new_beginner&safe_for_public_caching=True&sos=pl&source_page=logged_out_homepage&skip_price=true&source_page=logged_out_homepage&locale=en_US&currency=usd&navigation_locale=en_US*/


function Reviews() {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    const { CoursesData } = useContext(DataContext)
    if (CoursesData.isLoading) return <h1>Loading data</h1>
    if (CoursesData.isError) return <h1>{error}</h1>
    let ids = CoursesData.data.map(course => course.id)
    let courseName = CoursesData.data.map(course => course.headline).filter(course => course.headline !== '')
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
    reviewsData = reviewsData.slice(0, courseName.length)

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