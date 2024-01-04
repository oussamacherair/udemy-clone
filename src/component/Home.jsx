import React from 'react'
import Categories from "./Categories"
import Topics from "./Topics"
import BusinessUdemy from "./BusinessUdemy"
import Stories from "./Stories"
import Instractor from "./Instractor"
import Reviews from "./Reviews"
import Sponsers from "./Sponsers"
import Banner from "./Banner"
import Courses from "./Courses"
import Feed from "./Feed"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {
    return (
        <main className="max-w-screen-2xl mx-auto">
            <Banner />
            <Sponsers />
            <Feed />
            <Reviews />
            <div className="px-8 py-4">
                <div className="my-4">
                    <h1 className="text-bold text-3xl">Learners are viewing</h1>
                </div>
                <Courses />
            </div>
            <Categories />
            <Topics />
            <BusinessUdemy />
            <Stories />
            <Instractor />
        </main>
    )
}

export default Home