import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW3VZL1FZ0Q9dIMe2Q4WCR57M_xUedHEk",
  authDomain: "reservation-list-b8670.firebaseapp.com",
  projectId: "reservation-list-b8670",
  storageBucket: "reservation-list-b8670.firebasestorage.app",
  messagingSenderId: "114922756152",
  appId: "1:114922756152:web:63e744cda9c184fc2c6ecd",
  measurementId: "G-MEV67WFHPZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
