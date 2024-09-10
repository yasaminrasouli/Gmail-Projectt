import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8dkLL3GA5ibcV46YaUkIufRt_e-eCC3k",
  authDomain: "project-939f3.firebaseapp.com",
  projectId: "project-939f3",
  storageBucket: "project-939f3.appspot.com",
  messagingSenderId: "968376807033",
  appId: "1:968376807033:web:2acef6872469209816eea8",
  measurementId: "G-87WQPPSV9T",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp;

export { db, auth, provider, timestamp };
