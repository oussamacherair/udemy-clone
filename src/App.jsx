

import Header from "./component/Header"
import Footer from "./component/Footer"
import SignUp from './component/SignUp'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import Home from "./component/Home";
import LogIn from './component/log-in'
import CategorieCourses from "./CategorieCourses";
import Coursecurriculum from "./component/Coursecurriculum";
import Cart from './component/Cart'
import Learning from './component/Learning'
function App() {
  
  return (
    <div className=' '>
      <BrowserRouter>

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
      </BrowserRouter>
    </div>









  )
}

export default App
