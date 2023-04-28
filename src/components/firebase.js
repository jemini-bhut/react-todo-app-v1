
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB4SMia898kp2_EVBKn-ylIfrLp8bRlTlI",
  authDomain: "fcm-web-14f82.firebaseapp.com",
  projectId: "fcm-web-14f82",
  storageBucket: "fcm-web-14f82.appspot.com",
  messagingSenderId: "759644523322",
  appId: "1:759644523322:web:9dfc4b0f3e0b97ea89de03",
  measurementId: "G-6RVWJ9J2LK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
