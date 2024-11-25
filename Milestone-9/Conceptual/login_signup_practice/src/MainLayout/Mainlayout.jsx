import {
    createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../Components/Firebase/firebase.config";
import Navbar from "../Components/Navbar";
export const authContext = createContext();

const Mainlayout = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };
  const handleSignUp = (email, password) =>{
    createUserWithEmailAndPassword(auth , email , password)
    .then(result => setUser(result.user))
  }
  //! logout user
  const handleLogOut = () => {
    signOut(auth)
  }
  //TODO: this will keep the data of current user until the user logs out
  useEffect(() => {
   const onAuth =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    //! for some important reasons.................
    return onAuth;
  }, []);
  //! display user when users state is changed
  useEffect(() => {
    console.log("user state:", user);
  }, [user]);

  //!All outputs here
  const authData = {
    handleGoogleLogin,
    handleGithubLogin,
    user,
    setUser,
    handleLogOut,
    handleSignUp,
  };
  return (
    <div>
      <authContext.Provider value={authData}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default Mainlayout;
