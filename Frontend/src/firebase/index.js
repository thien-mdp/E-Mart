import {initializeApp} from "firebase/app";

import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqabGFV7NtD6mteCOPN7WeuD3Kxedhl9I",
  authDomain: "viteprojectone.firebaseapp.com",
  projectId: "viteprojectone",
  storageBucket: "viteprojectone.appspot.com",
  messagingSenderId: "188488490561",
  appId: "1:188488490561:web:56c1564aace173848cf0c0",
  measurementId: "G-PJK4CDQV67",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};
