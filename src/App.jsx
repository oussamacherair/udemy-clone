

import Header from "./component/Header"
import Footer from "./component/Footer"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import LogIn from './component/log-in'
import Coursecurriculum from "./component/Coursecurriculum";
function App() {


  return (
    <>
      <BrowserRouter>

        <Header />


        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/course/:courseName/:courseid" element={<Coursecurriculum />} />
        </Routes>
        <Footer />
      </BrowserRouter>




    </>

  )
}

export default App
