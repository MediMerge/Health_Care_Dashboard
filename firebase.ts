import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV8_ECGWkgyAxLT-HnGMpPHO-abF6CbJI",
  authDomain: "healthbase-e1df8.firebaseapp.com",
  projectId: "healthbase-e1df8",
  storageBucket: "healthbase-e1df8.appspot.com",
  messagingSenderId: "701985732377",
  appId: "1:701985732377:web:9e54815ced2f38058a7788",
  measurementId: "G-36PWR538DZ"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;
