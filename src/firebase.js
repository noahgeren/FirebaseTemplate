import * as Firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// TODO: Add config here
const firebaseConfig = {};

const firebase = Firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };