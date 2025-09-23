import { auth } from '@/Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  // google login
  const googleProvider = new GoogleAuthProvider()
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log("insider the user", currentUser)
    })
    return ()=>{
      unSubscribe()
    }
  },[])

  const authInfo = {
    loading,
    user,
    createUser,
    loginUser,
    logOut,
    googleLogin
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;