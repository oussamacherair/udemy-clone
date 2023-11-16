
import Banner from "./component/Banner"
import Coursers_Feed from "./component/Coursers_Feed"
import Header from "./component/Header"
import Sponsers from "./component/Sponsers"

function App() {


  return (
    <div className="app">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Sponsers/>
        <Coursers_Feed/>
      </main>

    </div>
  )
}

export default App
