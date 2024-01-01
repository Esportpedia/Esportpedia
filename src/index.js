import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {BrowserRouter} from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyA5sKrcJP-J4xTvRfKmVZ2ARlcERHhkEqE",
  authDomain: "captainside-907d3.firebaseapp.com",
  projectId: "captainside-907d3",
  storageBucket: "captainside-907d3.appspot.com",
  messagingSenderId: "808039852173",
  appId: "1:808039852173:web:214dfc75dfb40954d41ac4",
  measurementId: "G-NN419KX4VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
