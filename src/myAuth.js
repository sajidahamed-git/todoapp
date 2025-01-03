// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBySfzGlzkE4aPPm9l6Oo9I0UFFJ7ZGejk",
  authDomain: "tasksapp-37487.firebaseapp.com",
  projectId: "tasksapp-37487",
  storageBucket: "tasksapp-37487.firebasestorage.app",
  messagingSenderId: "805294975686",
  appId: "1:805294975686:web:0127ce627f6c1a0a5d05c7",
  measurementId: "G-68B0ZY846M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user Info", user);
    console.log("accessToken", token);
  } catch (error) {
    console.error(error);
    console.error(error.code);
    console.error(error.message);
  }
}
export async function signOutUser(params) {
  try {
    await signOut(auth);
    console.log("user signedout");
  } catch (error) {
    console.log("error during signout", error);
  }
}
