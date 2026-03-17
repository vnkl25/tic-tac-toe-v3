import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator  } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

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

// Only connect to emulators when running locally
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8081);
  connectStorageEmulator(storage, "localhost", 9199);
}

export { auth, provider };
export  { db };
export { storage };
