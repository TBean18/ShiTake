import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB8goCidBIuFM3n1aQ2pMAPV_SC7lo7k-0",
  authDomain: "shitake-b3a79.firebaseapp.com",
  projectId: "shitake-b3a79",
  storageBucket: "shitake-b3a79.appspot.com",
  messagingSenderId: "757074288438",
  appId: "1:757074288438:web:0659abca5760d9b18b1d97",
  measurementId: "G-M89K568EJX",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return auth.currentUser && <button onClick={auth.signOut}>Sign Out </button>;
}

function ChatRoom() {}

export default App;
