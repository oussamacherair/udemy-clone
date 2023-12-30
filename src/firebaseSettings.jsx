// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJcyAEU0glF6xt_IewHb7TgWV8VDW9eX4",
    authDomain: "udmey-clone.firebaseapp.com",
    projectId: "udmey-clone",
    storageBucket: "udmey-clone.appspot.com",
    messagingSenderId: "443824816222",
    appId: "1:443824816222:web:c14728051a0781b1f674cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);