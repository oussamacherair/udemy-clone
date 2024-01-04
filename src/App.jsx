

import Header from "./component/Header"
import Footer from "./component/Footer"
import LogIn from './component/LogIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
function App() {


  return (
    <>
      <BrowserRouter>

        <Header />


        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>




    </>

  )
}

export default App
