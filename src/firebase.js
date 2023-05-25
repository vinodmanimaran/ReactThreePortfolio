import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCGZMABG8Gdgasc_rrdMnHLOOIYFmcoJWQ',
  authDomain: 'professional-portolio.firebaseapp.com',
  projectId: 'professional-portolio',
  storageBucket: 'professional-portolio.appspot.com',
  messagingSenderId: '319196077365',
  appId: '1:319196077365:web:7b3a1384b56b083718807c',
  measurementId: 'G-Z2B5W7JEHR',
};

const app = initializeApp (firebaseConfig);
export const auth = getAuth ();
const provider = new GoogleAuthProvider ();
export const db = getFirestore (app);
export const storage = getStorage (app);

export const signInWithGoogle = () => signInWithPopup (auth, provider);
