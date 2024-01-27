import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUriUABc95ZqF_68vYm8xeHdLvfZN0qIo",
  authDomain: "mega-master-ec84e.firebaseapp.com",
  projectId: "mega-master-ec84e",
  storageBucket: "mega-master-ec84e.appspot.com",
  messagingSenderId: "111468565151",
  appId: "1:111468565151:web:daac478c5f2a98fedec8aa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);