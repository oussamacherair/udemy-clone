import Review from "./Review";
import Slider from "react-slick";
import { reviewsFrontendApi } from "../../../Data/reviewsFrontendApi";

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
    let reviews = reviewsFrontendApi()
    if (reviews.Loading) return <h1>loading</h1>

    if (reviews.Error) return <h1>error</h1>

    if (reviews?.some((query) => query.isLoading)) return <h1>Loading reviews</h1>;
    if (reviews?.some((query) => query.isError)) return <h1>Error fetching reviews</h1>
    let ReviewsData = reviews.map(({ data }) => data).map(({ data }) => {
        return data.map(review => review).filter(el => el.content !== '' & el.content.length > 7)
    })
    ReviewsData= ReviewsData.flat(4)
    return (
        <div className='px-5 pt-10 bg-gray-100 my-8'>
            

                <div>
                <h1 className='text-2xl font-bold pb-6'>How learners like you are achieving their goals</h1>
            </div>
            <div className="py-8">
                <Slider {...settings}>
                    {ReviewsData.map((review) => (
                        <Review key={review.id} {...review} />

                    ))}
                </Slider>



            </div>
            

        </div>
    )
}

export default Reviews