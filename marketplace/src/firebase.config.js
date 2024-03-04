// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZTKDbyvLNmUZOQkYmew341evXWDsps0U",
  authDomain: "marketplace-app-32be0.firebaseapp.com",
  projectId: "marketplace-app-32be0",
  storageBucket: "marketplace-app-32be0.appspot.com",
  messagingSenderId: "23850729128",
  appId: "1:23850729128:web:0a9bcf64db758c0df88c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()