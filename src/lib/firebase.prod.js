import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";
// we need to somhow seed the database with
// we need a config here

const config = {
  apiKey: "AIzaSyD_2VU-0-OdFNjUAOqjq9emtwCa0NylLWw",
  authDomain: "hetflix-a283e.firebaseapp.com",
  projectId: "hetflix-a283e",
  storageBucket: "hetflix-a283e.appspot.com",
  messagingSenderId: "229265593404",
  appId: "1:229265593404:web:98824ea40ae90a1a185f39",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
