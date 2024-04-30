import React from "react";
import Categories from "../component/navigation/Categories";
import Topics from "../component/Reviews/Topics";
import BusinessUdemy from "./BusinessUdemy";
import Stories from "../component/Reviews/Stories";
import Instractor from "./Instractor";
import Reviews from "../component/Reviews/Reviews";
import Sponsers from "./Reviews/Sponsers";
import Banner from "./Banner";
import Courses from "../component/Courses_dir/Courses";
import Feed from "../component/Reviews/Feed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  
  return (
    <main className="max-w-screen-2xl mx-auto ">
      <Banner />
      <Sponsers />
      <Feed />

      <div className="px-8 py-4">
        <div className="my-4">
          <h1 className="text-bold text-3xl">Learners are viewing</h1>
        </div>
        <Courses />
      </div>
      <Reviews />
      <Categories />
      <Topics />
      <BusinessUdemy />
      <Stories />
      <Instractor />
    </main>
  );
}

export default Home;
