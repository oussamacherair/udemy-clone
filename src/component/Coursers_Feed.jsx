import { Spinner } from '@material-tailwind/react';
import { useCategories, useCourses } from './CategoriesApi';
import Course from './Course';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true, nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

renderArrows = () => (
  <div className=" absolute z-50 bg-red-900">
    <ButtonBase
      className="bg-red-900"
      onClick={() => this.slider.slickPrev()}
    >
      <IoIosArrowDropleftCircle />
    </ButtonBase>
    <ButtonBase
      className="arrow-btn next"
      onClick={() => this.slider.slickNext()}
    >
      <IoIosArrowDroprightCircle />
    </ButtonBase>
  </div>
)
const CustomNextArrow = (props) => {
  return (
    <div onClick={props.onClick}>
      <IoIosArrowDroprightCircle />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  return (
    <div onClick={props.onClick}>
      <IoIosArrowDropleftCircle size={80} className=' absolute text-ora'/>
    </div>
  );
};


function Coursers_Feed() {
  
  let CoursesData;
  const { isFetching, status, data: Categories } = useCategories([])
  const { data: Courses } = useCourses([])
  if (isFetching) return CoursesData = <Spinner />




  return (
    <div className='p-5'>
      <div>
        <h1 className='text-3xl font-bold'>
          A broad selection of courses
        </h1>
        <p className='text-xl my-4'>Choose from over 210,000 online video courses with new additions published every month</p>
      </div>
      <div className='flex flex-wrap my-4'>
        {status === 'pending' ? <h1>Loading...</h1> :
          Categories?.map(cat => <p key={cat.id} className='text-sm px-2 py-2 m-2 font-bold text-gray-600 bg-gray-100 hover:text-black cursor-pointer'>{cat.title}</p>)}
      </div>

      <div className='border-2 mb-14 border-gray-300 p-12'>
        <div>
          <h1 className='text-3xl font-bold'>Expand your career opportunities</h1>
          <p className='line-clamp-3 my-8'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
          <button className='px-3 py-2 border-2 border-black hover:bg-gray-100'>Explore Python</button>
        </div>

        <div className='relative mt-10 overflow-hidden'>
          {this.renderArrows()}
          <Slider {...settings}>

            {
              Courses?.map(({ headline, id, image_480x270, price, title, url, visible_instructors, rating }) => (
                <Course
                  key={id}
                  headline={headline}
                  id={id}
                  image={image_480x270}
                  price={price}
                  title={title}
                  url={url}
                  visible_instructors={visible_instructors}
                  rating={((Math.random() * 4) + 1).toPrecision(2)}
                />
              ))
            }
          </Slider>

        </div>

      </div>

    </div>


  )
}

export default Coursers_Feed