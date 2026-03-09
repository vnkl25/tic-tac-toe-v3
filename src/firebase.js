import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGxCG6EmH1anz2WUWRI2sPMjbbgSv35P0",
  authDomain: "tic-tac-toe-v3-677a6.firebaseapp.com",
  projectId: "tic-tac-toe-v3-677a6",
  storageBucket: "tic-tac-toe-v3-677a6.firebasestorage.app",
  messagingSenderId: "833878876554",
  appId: "1:833878876554:web:0f94fe56c5960dcad32873"
};

const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

export { auth, provider };
export  { db };
export { storage };
