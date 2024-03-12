import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

 
const firebaseConfig = {
  apiKey: "AIzaSyDF5ZTZT-zm2BKXANkVxVic0sA6GvUaHnQ",
  authDomain: "openit-edu.firebaseapp.com",
  projectId: "openit-edu",
  storageBucket: "openit-edu.appspot.com",
  messagingSenderId: "300266824181",
  appId: "1:300266824181:web:b7793369e8521400ddc0bc"
};

export const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);