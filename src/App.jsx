
import Header from "./component/Header"
import Footer from "./component/Footer"
import SignUp from './component/SignIn_Signup/SignUp'
import {Route, Routes,} from 'react-router-dom'
import Home from "./component/Home";
import LogIn from './component/SignIn_Signup/log-in'
import CategorieCourses from "./component/Filters/CategorieCourses";
import Coursecurriculum from "./component/Courses_dir/Coursecurriculum";
import Cart from './component/Cart/Cart'
import Learning from './component/LearningPage/Learning'
function App() {
  
  return (
    <div className=''>

        <Header />


        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/Profile/MyLearning' element={<Learning/>}/>
          <Route path="Courses/Category/search/:search" element={<CategorieCourses />} />
          <Route path="Courses/Category/:courseCategory/:courseSubCategory" element={<CategorieCourses />} />
          <Route path="Courses/Category/:courseCategory/" element={<CategorieCourses />} />
          <Route path="/Course/:courseName/:courseid" element={<Coursecurriculum />} />
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
        <Footer />
    </div>









  )
}

export default App
