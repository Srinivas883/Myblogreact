// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJFE_pEHk4UO61X994vrt3-CrOsjncWI",
  authDomain: "blog-app-emc-3df65.firebaseapp.com",
  projectId: "blog-app-emc-3df65",
  storageBucket: "blog-app-emc-3df65.firebasestorage.app",
  messagingSenderId: "422412382183",
  appId: "1:422412382183:web:9aa5fe26fa5595ac21d742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth