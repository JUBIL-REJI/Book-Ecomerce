// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCIikvUmi5sA4viWkYl1uiWRReVhnNAKH4",
  authDomain: "login-e0e6d.firebaseapp.com",
  projectId: "login-e0e6d",
  storageBucket: "login-e0e6d.firebasestorage.app",
  messagingSenderId: "131643777584",
  appId: "1:131643777584:web:a000402259b79912ddc3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };;