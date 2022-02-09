import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAHBgL32xUEWXcJR-COVpwEk6w93b6cZE",
  authDomain: "frontend7-63199.firebaseapp.com",
  projectId: "frontend7-63199",
  storageBucket: "frontend7-63199.appspot.com",
  messagingSenderId: "605682983908",
  appId: "1:605682983908:web:67c1b9321d0bd420c11df1"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export{
    app,
    google
}