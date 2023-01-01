import React, { useContext,createContext, useState,useEffect} from 'react'
import {onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth' 
import { auth } from '../utils/firebaseConfig'

const AuthContext=createContext()

function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState(false)
    const [loading,setLoading]=useState(false)


    // useEffect(() => {
    //    const unsub=onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         setCurrentUser(user)
    //         setLoading(false)
    //       } else {
    //         setCurrentUser(null)
    //         setLoading(false)
    //       }
    //     })
         
      
    //   }, [])

      function signUp(email,password){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        
      }

      function signIn(email,password){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
      }



    
    

    const value={
      user:currentUser
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
export {useAuth,AuthProvider}