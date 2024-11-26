import { constants } from "buffer";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { use, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMEIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email:string, password:string) => {
  try {
    console.log("imakokodayo")
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log("seikou")
    const user = userCredential.user;
  }
  catch (error) {
    console.log(error);
  }};

export const signIn = async (email:string, password:string) => {
  // ログイン成功
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
  } catch(error){
    console.log(error);
  }
};
  
  import { onAuthStateChanged } from "firebase/auth";

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  