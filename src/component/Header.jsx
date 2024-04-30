import React, { useState, useContext } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarCats from "./navigation/navbarCats";
import Sidebar from "./navigation/sidebar";
import CategorieNavBar from "./navigation/categoriesNavbar";
import DataContext from "../../Data/Contaxt";

function Header() {
  let navigate = useNavigate();
  const [isSidebarOpen, setToggle] = useState(false);
  const [isImageClicked, setImageClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [SearchedTopic, setSearchedTopic] = useState("");
  const [navbarStatus, setNavbarStatus] = useState(false);

  const { User } = useContext(DataContext);


  const logIn = () => {
    navigate("/LogIn");
  };

  const Signup = () => {
    navigate("/SignUp");
  };
  const handleImageClick = () => {
    setImageClicked(!isImageClicked);
    setSelectedCategory(null);
    setNavbarStatus(false);
  };
  const navBarStatusChack = () => {
    setNavbarStatus(true);
    navigate("/Cart");
  };

  const Toggler = () => setToggle(!isSidebarOpen);
  const handler = value => {
    if (value.trim() !== "" && value !== null) setSearchedTopic(value);
    return null;
  };

  const getCourseByName = (value, e) => {
    e.preventDefault();
    if (value) navigate(`Courses/Category/search/${value}`);
    else return;
  };
  const searchCourseByName = () => {
    if (SearchedTopic.trim() !== "")
      navigate(`Courses/Category/search/${SearchedTopic}`);
    return;
  };
const Client=User
  return (
    <header className="flex flex-col p-2 md:px-4 md:py-4 shadow-bottom">
      <div
        className={
          !!Client
            ? ` flex items-center justify-around space-x-11 ${
                navbarStatus ? "" : "lg:border-b-2 pb-4 md:mb-3"
              }`
            : "flex items-center justify-around space-x-11"
        }
      >
        <div className="flex items-center space-x-4 ">
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              className={`h-9 object-contain cursor-pointer`}
              alt="udemy"
              onClick={handleImageClick}
            />
          </Link>
          <div>
            <h1 className="link hidden md:flex">Categories</h1>
          </div>
        </div>

        {/* left mid*/}
        <div className="flex-grow hidden md:block">
          <div className="flex border-2 border-black rounded-full h-20 min-w-96 relative">
            <form action="" className='w-full' onSubmit={e => getCourseByName(SearchedTopic, e)}>
              <div>
                <AiOutlineSearch
                  onClick={() => searchCourseByName(SearchedTopic)}
                  className="absolute bottom-5 left-1 cursor-pointer"
                  size={35}
                />
              </div>
              <input
                type="text"
                onChange={e => handler(e.target.value)}
                placeholder="Search for anything"
                className="h-full px-8 pl-10 text-xl w-full rounded-full focus:outline-none"
              />
            </form>
          </div>
        </div>

        {/* left right*/}

        
        <div className="flex space-x-4 items-center pr-4 justify-around">
          <div className=" md:flex">
            <AiOutlineShoppingCart
              onClick={() => navBarStatusChack()}
              className="link text-3xl"
            />
          </div>

          {!!Client ? (
            <div className="relative z-50">
              <Avatar
                className="cursor-pointer"
                src={Client?.photoURL}
                onClick={() => Toggler()}
              />
              {isSidebarOpen && (
                <Sidebar name={Client?.displayName} email={Client?.email} />
              )}
            </div>
          ) : (
            <div className="flex space-x-4">
              <div
                onClick={logIn}
                className="px-3 py-2 flex  justify-start items-center bg-black text-white border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100 hover:text-black"
              >
                <h3>Log in</h3>
              </div>
              <div
                onClick={Signup}
                className="hidden md:inline-block px-3 py-2  justify-start items-center   border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100"
              >
                <h3>Sign up</h3>
              </div>
            </div>
          )}
          {!!Client ? (
            ""
          ) : (
            <div className="hidden lg:block">
              <GrLanguage size={25} />
            </div>
          )}
        </div>
      </div>

      {navbarStatus ? (
        ""
      ) : !!Client ? (
        <div>
          <NavbarCats
            getCategory={setSelectedCategory}
            style={
              !!selectedCategory
                ? "hidden"
                : "text-lg  mx-2 cursor-pointer p-2 link shadow-[rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px]"
            }
            size={8}
          />
        </div>
      ) : (
        <div></div>
      )}

      {navbarStatus ? (
        ""
      ) : !!selectedCategory ? (
        <CategorieNavBar mainTitle={selectedCategory} size={8} />
      ) : (
        <div></div>
      )}
    </header>
  );
}

export default Header;
