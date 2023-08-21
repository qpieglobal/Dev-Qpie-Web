// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";
import { Auth, RecaptchaVerifier, getAuth } from "firebase/auth";
import { _window } from "./window";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

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
