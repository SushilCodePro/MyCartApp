// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import * as firebase from 'firebase/app'; // Import the core Firebase module
// import 'firebase/firestore'; // Import Firestore if you're using Firestore
// const firebaseConfig = {
//   apiKey: "AIzaSyC5TDiI04CJgnnECBNxkH3kOkI47ImrRo0",
//   authDomain: "mycart-ce053.firebaseapp.com",
//   projectId: "mycart-ce053",
//   storageBucket: "mycart-ce053.appspot.com",
//   messagingSenderId: "667980275379",
//   appId: "1:667980275379:web:3e6be4135f249c7c1f5ac6"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app'; // Import the core Firebase module
import 'firebase/firestore'; // Import Firestore if you're using Firestore

const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyC5TDiI04CJgnnECBNxkH3kOkI47ImrRo0",
  authDomain: "mycart-ce053.firebaseapp.com",
  projectId: "mycart-ce053",
  storageBucket: "mycart-ce053.appspot.com",
  messagingSenderId: "667980275379",
  appId: "1:667980275379:web:3e6be4135f249c7c1f5ac6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Now 'firebaseApp' is an instance of FirebaseApp, and you can use it 
// to access Firebase services.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App firebaseApp={firebaseApp} />
  
);
