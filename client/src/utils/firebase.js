import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);

// auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log("userAuth: ", userAuth)
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // check if the data exists in the database
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const signInWithFirebase = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const handleSignUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
};
