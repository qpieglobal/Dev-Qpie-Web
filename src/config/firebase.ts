// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";
import { Auth, RecaptchaVerifier, getAuth } from "firebase/auth";
import { _window } from "./window";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7gFHReIJ29A0mKxjLDX6ArcBgwdsAWo",
  authDomain: "qpie-f342e.firebaseapp.com",
  projectId: "qpie-f342e",
  storageBucket: "qpie-f342e.appspot.com",
  messagingSenderId: "610588246781",
  appId: "1:610588246781:web:f11730fc48cd6b7ef07494",
  measurementId: "G-5NCCVS01TE",
};

let firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let auth = getAuth(firebaseApp);

export function createRecaptchaVerifier(auth: Auth) {
  _window.recaptchaVerifier = new RecaptchaVerifier(auth, "_recaptcha", {
    size: "invisible",
    callback: (response: any) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log(response);
    },
  });
}

export { firebaseApp, auth };
