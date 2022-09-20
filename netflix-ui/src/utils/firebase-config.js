import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2qmDPPXvFxrYpevYZW-4XFnWWMAkPFoo",
  authDomain: "react-movie-ca2f6.firebaseapp.com",
  projectId: "react-movie-ca2f6",
  storageBucket: "react-movie-ca2f6.appspot.com",
  messagingSenderId: "995686860392",
  appId: "1:995686860392:web:1b1bf332f785b7461b1ddd"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
