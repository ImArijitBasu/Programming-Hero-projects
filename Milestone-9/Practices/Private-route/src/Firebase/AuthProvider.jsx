import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import firebase from 'firebase/compat/app';
import { auth } from './firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const createNewUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const userLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe
    },[])
    const authInfo = {
        user,
        setUser,
        userLogin,
        createNewUser,
        userSignOut,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;