// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "miles-mern.firebaseapp.com",
    projectId: "miles-mern",
    storageBucket: "miles-mern.appspot.com",
    messagingSenderId: "703649027909",
    appId: "1:703649027909:web:018364eb1e8c75685fd02c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);