import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1xbLfoHwWb49xRYTnB7gUReCxHtKaWVc",
  authDomain: "cart1-91f76.firebaseapp.com",
  projectId: "cart1-91f76",
  storageBucket: "cart1-91f76.appspot.com",
  messagingSenderId: "866674252397",
  appId: "1:866674252397:web:be52b32ec618cfbaf1bd64",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
