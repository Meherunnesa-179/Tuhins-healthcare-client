import React from 'react';
import { useState } from 'react';
import { sendEmailVerification,
    createUserWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword, } from "firebase/auth";
import { useEffect } from 'react';
import firebaseInitialize from '../Firebase/firebase.inint';

firebaseInitialize();
const useFirebase = () => {
    const [user , setUser]=useState({});
    const [error , setError] = useState("");
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
    return  signInWithPopup(auth, googleProvider);
    }

     // Email sign in
  function signInWithEmail(e) {
    e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function emailVerify() {
    sendEmailVerification(auth.currentUser).then(() => {
      alert(`An Verification mail has been set to ${email}`);
    });
  }

    const logOut =() =>{
        signOut(auth).then(() => {
            setUser(user)
          }).catch((error) => {
            // An error happened.
          });
    }

     // sign up with email password
  function singUp(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setNameAndImage();
        emailVerify();
        alert("user has been created");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

   // get name
   function getName(e) {
    setName(e?.target?.value);
  }

  // get Email
  function getEmail(e) {
    setEmail(e?.target?.value);
  }
  // Get password
  function getPassword(e) {
    setPassword(e?.target?.value);
  }

    useEffect( ()=>{
        onAuthStateChanged (auth , (user)=>{
            if(user){
                setUser(user)
            }else {
                setUser({});
              }
        })
    } ,[])

    return {
        user,
        error,
        name,
        signInWithGoogle,
        logOut,
        signInWithEmail,
        setUser,
        setError,
        getPassword,
        getEmail,
        singUp,
        getName,

    }
        
};

export default useFirebase;