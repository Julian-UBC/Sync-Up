import axios from "axios";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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

export const signInWithGooglePopUp = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      console.log("Sign In with Google Pop Up success!")
    })
    .catch(err => {
      console.log("signInWithGooglePopUp err: ", err)
    });
}

export const signInWithFirebase = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Sign In success!")
    })
    .catch(err => {
      console.log("signInWithFirebase err: ", err)
    });
}

export const signUpWithFirebase = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async () => {
      console.log("Sign Up success!")
      signInWithFirebase(email, password);
      const user = auth.currentUser
      axios({
        method: 'PUT',
        url: "http://localhost:8000/api/user",
        timeout: 3000,
        data: {
          uniqueId: user.uid,
          email: user.email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Put user res: ", res)
        })
        .catch(err => {
          console.log("Put User failed: ", err)
        });
    })
    .catch(err => {
      console.log("signUpWithFirebase err: ", err)
    })
};