import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDJcyAEU0glF6xt_IewHb7TgWV8VDW9eX4",
    authDomain: "udmey-clone.firebaseapp.com",
    projectId: "udmey-clone",
    storageBucket: "udmey-clone.appspot.com",
    messagingSenderId: "443824816222",
    appId: "1:443824816222:web:c14728051a0781b1f674cf"
};


const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const TwiterProvider = new TwitterAuthProvider()
export const auth = getAuth(app)