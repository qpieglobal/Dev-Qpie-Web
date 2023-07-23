// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { RecaptchaVerifier, getAuth } from "firebase/auth";
import { _window } from "./window";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8gy0-IEDGKL6YhGp5-Hf6T4-OdbNGteI",
  authDomain: "qpie-d87c5.firebaseapp.com",
  databaseURL: "https://qpie-d87c5.firebaseio.com",
  projectId: "qpie-d87c5",
  storageBucket: "qpie-d87c5.appspot.com",
  messagingSenderId: "129462284228",
  appId: "1:129462284228:web:bb39b6b22413e3bc2dbe91",
  measurementId: "G-8CSJTC000N",
};

export class FirebaseInit {
  private static _app: any;
  private static _analytics: any;
  private static _auth: any;

  constructor() {
    FirebaseInit._app = initializeApp(firebaseConfig);
    FirebaseInit._analytics = getAnalytics(FirebaseInit._app);
    FirebaseInit._auth = getAuth(FirebaseInit._app);
    FirebaseInit._auth.useDeviceLanguage();
  }

  public static getApp() {
    if (!FirebaseInit._app) {
      FirebaseInit._app = initializeApp(firebaseConfig);
    }
    return FirebaseInit._app;
  }

  public static getAuth() {
    if (!FirebaseInit._auth) {
      FirebaseInit._auth = getAuth(initializeApp(firebaseConfig));
      FirebaseInit._auth.useDeviceLanguage();
    }
    return FirebaseInit._auth;
  }

  public static getAnalytics() {
    if (!FirebaseInit._analytics) {
      FirebaseInit._analytics = getAnalytics(FirebaseInit._app);
    }
    return FirebaseInit._analytics;
  }
}
