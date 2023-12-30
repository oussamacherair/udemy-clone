
import Banner from "./component/Banner"
import Courses from "./component/Courses"
import Feed from "./component/Feed"
import Header from "./component/Header"
import Reviews from "./component/Reviews"
import Sponsers from "./component/Sponsers"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./component/Categories"
import Topics from "./component/Topics"
import BusinessUdemy from "./component/BusinessUdemy"
import Stories from "./component/Stories"
import Instractor from "./component/Instractor"
import Footer from "./component/Footer"
function App() {

                                                           
  return (
  
      <div>
        <Header />
        <main className="max-w-screen-2xl mx-auto">
          <Banner />
         <Sponsers />
          <Feed />
          <Reviews/>
          <div className="px-8 py-4">
            <div className="my-4">
              <h1 className="text-bold text-3xl">Learners are viewing</h1>
            </div>
            <Courses/>
          </div>
          <Categories/>
          <Topics/>
          <BusinessUdemy/>
          <Stories/>
          <Instractor/>
        </main>
        <Footer/>
      </div>

  )
}

export default App
