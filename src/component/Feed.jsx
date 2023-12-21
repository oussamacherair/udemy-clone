
import CategoriesApi from '../../api/CategoriesApi';
import Courses from './Courses';

function Coursers_Feed() {
  return (
    <div className='p-5'>
      <div>
        <h1 className='text-3xl font-bold'>
          A broad selection of courses
        </h1>
        <p className='text-xl my-4'>Choose from over 210,000 online video courses with new additions published every month</p>
      </div>

      <CategoriesApi />


      <div className='border-2 mb-14 border-gray-300 p-12'>
        <div>
          <h1 className='text-3xl font-bold'>Expand your career opportunities</h1>
          <p className='line-clamp-3 my-8'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
          <button className='px-3 py-2 border-2 border-black hover:bg-gray-100'>Explore Python</button>
        </div>

        <div className='relative mt-10'>
          <Courses />
        </div>

      </div>

    </div>


  )
}

export default Coursers_Feed