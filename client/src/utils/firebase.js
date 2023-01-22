import axios from "axios";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addUser } from "./apiHelper";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCkX9gA8tSIxrkOzMxl3EaW5TOiMy5I8c",
  authDomain: "syncup-d6a60.firebaseapp.com",
  projectId: "syncup-d6a60",
  storageBucket: "syncup-d6a60.appspot.com",
  messagingSenderId: "860580811078",
  appId: "1:860580811078:web:55eb2b8a73fb2f3720d547"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopUp = (setIsLogin, navigate) => {
  signInWithPopup(auth, provider)
    .then(async () => {
      console.log("Sign In with Google Pop Up success!")
      const user = auth.currentUser
      const res = await axios.get(`http://localhost:8000/api/user/${user.email}`);
      if (!res.data) {
        addUser(user.uid, user.email)
      }
      setIsLogin(true)
      navigate("/")
    })
    .catch(err => {
      console.log("signInWithGooglePopUp err: ", err)
      setIsLogin(false)
    });
}

export const signInWithFirebase = (email, password, setIsLogin, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Sign In success!")
      setIsLogin(true)
      navigate("/")
    })
    .catch(err => {
      console.log("signInWithFirebase err: ", err)
      setIsLogin(false)
    });
}

export const signUpWithFirebase = (email, password, setIsLogin, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Sign Up success!")
      signInWithFirebase(email, password);
      const user = auth.currentUser
      addUser(user.uid, user.email)
      setIsLogin(true)
      navigate("/")
    })
    .catch(err => {
      console.log("signUpWithFirebase err: ", err)
      setIsLogin(false)
    })
};