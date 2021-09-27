// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7SOSbO7_efoVcN1ijrK2yz_YPPOhoRgE",
  authDomain: "myproduct-ec88c.firebaseapp.com",
  projectId: "myproduct-ec88c",
  storageBucket: "myproduct-ec88c.appspot.com",
  messagingSenderId: "444647270481",
  appId: "1:444647270481:web:c1cfe427fd87bd3272b070",
  measurementId: "G-YTHKW326T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;