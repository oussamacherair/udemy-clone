

import Header from "./component/Header"
import Footer from "./component/Footer"
import SignUp from './component/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import LogIn from './component/log-in'
import CategorieCourses from "./CategorieCourses";
import Coursecurriculum from "./component/Coursecurriculum";




function App() {


  return (
    <> 
      <BrowserRouter>

          <Header />


          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="Courses/Category/:courseCategory/" element={<CategorieCourses />} />
            <Route path="Courses/Category/:courseCategory/:courseSubCategory" element={<CategorieCourses />} />
            <Route path="/Course/:courseName/:courseid" element={<Coursecurriculum />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>

     



    



  )
}

export default App
