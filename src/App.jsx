
import Banner from "./component/Banner"
import Courses from "./component/Courses"
import Feed from "./component/Feed"
import Header from "./component/Header"
import Reviews from "./component/Reviews"
import Sponsers from "./component/Sponsers"

function App() {

                                                           
  return (
  
      <div className="app">
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
        </main>
      </div>

  )
}

export default App
