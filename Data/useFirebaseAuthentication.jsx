
import { useState, useEffect } from "react";
import { auth } from "../src/firebase.config";



const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });

    return () => {
      unlisten();
    };
  }, []);

  return authUser;
};

export default useFirebaseAuthentication;
