
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjtJYw54EiwOytGOTp0JlkW5LVGw4EiaM",
  authDomain: "next-f-proj.firebaseapp.com",
  projectId: "next-f-proj",
  storageBucket: "next-f-proj.appspot.com",
  messagingSenderId: "478648264098",
  appId: "1:478648264098:web:f337bc30f83570c9f83efb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const db = getFirestore(app)