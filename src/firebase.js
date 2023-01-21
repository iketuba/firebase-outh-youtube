import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd_rE6xk17aeujyUA2v-C8ZN4mahYvh9c",
  authDomain: "fir-outh-76be0.firebaseapp.com",
  projectId: "fir-outh-76be0",
  storageBucket: "fir-outh-76be0.appspot.com",
  messagingSenderId: "3259235995",
  appId: "1:3259235995:web:32a4e9f28ea3ab949a503e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
