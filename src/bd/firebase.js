import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDr9wAPsUFVwcYoDythG910YyAads22Ax8",
  authDomain: "herhelclinic-710b9.firebaseapp.com",
  projectId: "herhelclinic-710b9",
  storageBucket: "herhelclinic-710b9.appspot.com",
  messagingSenderId: "326121729425",
  appId: "1:326121729425:web:b8540856896c7d5cf53e30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);