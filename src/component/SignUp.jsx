import React, { useState } from "react";
import { auth, db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function logIn() {
  let navigate = useNavigate();
  const [userName, getuserName] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const collectionRef = collection(db, "users");
  
  const Submit = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: uploadImage
        });
        sendEmailVerification(auth.currentUser).then(() => {
          alert("verfy your email");
        });
        getuserName("");
        getEmail("");
        getPassword("");
        navigate("/");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="p-10 mx-auto">
      <div className="w-full md:w-80 mx-auto">
        <h1 className="text-3xl font-black py-4">Sign Up</h1>

        <form
          action=""
          className="flex flex-col mt-2 mb-4 w-full md:min-w-92"
          onSubmit={e => Submit(e)}
        >
          <input
            value={userName}
            onChange={e => getuserName(e.target.value)}
            type="text"
            placeholder="Full name"
            className="  px-4 py-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100"
          />
          <input
            value={uploadImage}
            onChange={e => setUploadImage(e.target.value)}
            type="url"
            placeholder="Enter you Photo url"
            className="  px-4 py-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100"
          />
          <input
            value={email}
            onChange={e => getEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="  px-4 py-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100"
          />
          <input
            value={password}
            type="Password"
            onChange={e => getPassword(e.target.value)}
            placeholder="Password"
            className=" px-4 py-4 mt-2 mb-4 border-2 border-black font-bold text-md cursor-pointer hover:bg-gray-100"
          />
          <input
            type="submit"
            value="Log In"
            className="text-xl  px-4 py-4 bg-[#a435f0] font-bold text-md cursor-pointer text-white hover:bg-purple-600"
          />
        </form>

        <div className="border-b-1 border-gray-300  pb-4 mb-4">
          <h1 className="text-purple-600 text-xl underline capitalize font-bold text-center p-4 cursor-pointer">
            <span className="text-black text-sm no-underline">or</span> forget
            Password
          </h1>
        </div>
      </div>
    </div>
  );
}

export default logIn;
