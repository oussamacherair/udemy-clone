import { useContext } from "react";
import Header from "./component/Header"
import Footer from "./component/Footer"
import SignUp from './component/SignIn_Signup/SignUp'
import {Route, Routes,Navigate,Outlet} from 'react-router-dom'
import Home from "./component/Home";
import LogIn from './component/SignIn_Signup/log-in'
import CategorieCourses from "./component/Filters/CategorieCourses";
import Coursecurriculum from "./component/Courses_dir/Coursecurriculum";
import Cart from './component/Cart/Cart'
import Learning from './component/LearningPage/Learning'
import DataContext from "../Data/Contaxt";
import ErrorPage from './error-page'
function App() {
  const { User } = useContext(DataContext);

 const ProtectedRoute = (red) => {
  if (User) return <Navigate to="/"  />
  if(!User) return <Outlet />;

};
  return (
    <div className=''>

        <Header />


        <Routes>
        <Route index path="/" element={<Home />} />
       
           <Route element={<ProtectedRoute  />}>
             <Route path="/logIn" element={<LogIn />} />
          </Route>

          <Route element={<ProtectedRoute/>}>
              <Route path="/SignUp" element={<SignUp />} />
          </Route>

          
          <Route path='/Profile/MyLearning' element={<Learning/>}/>
          <Route path="Courses/Category/search/:search" element={<CategorieCourses />} />
          <Route path="Courses/Category/:courseCategory/:courseSubCategory" element={<CategorieCourses />} />
          <Route path="Courses/Category/:courseCategory/" element={<CategorieCourses />} />
          <Route path="/Course/:courseName/:courseid" element={<Coursecurriculum />} />
          <Route path='/Cart' element={<Cart/>}/>


          {/**** wrong routing */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>









  )
}

export default App
