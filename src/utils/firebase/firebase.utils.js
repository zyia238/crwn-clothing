// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider , createUserWithEmailAndPassword } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC04FEIC5WeRQLxj-ZWf3WEDECpXUF3DQ8",
  authDomain: "crwn-clothing-db-1d3db.firebaseapp.com",
  projectId: "crwn-clothing-db-1d3db",
  storageBucket: "crwn-clothing-db-1d3db.appspot.com",
  messagingSenderId: "617233452197",
  appId: "1:617233452197:web:21572a627f68095729514c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters(
    {
        prompt:'select_account'
    }
)

export const auth = getAuth()
export const signInWithGooglePop = () => signInWithPopup(auth , provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};