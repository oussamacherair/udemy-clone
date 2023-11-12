
//import './App.css'

import Banner from "./component/Banner"
import Header from "./component/Header"
import Sponsers from "./component/Sponsers"

function App() {


  return (
    <div className="app">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Sponsers/>
      </main>

    </div>
  )
}

export default App
