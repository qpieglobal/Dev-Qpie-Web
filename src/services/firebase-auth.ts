import { signInWithPhoneNumber } from "firebase/auth";
import { FirebaseInit } from "../config/firebase";
import { _window } from "@/config/window";

export class FirebaseAuth {
  public static sendFirebaseOTP(mobileNo: string) {
    return signInWithPhoneNumber(
      FirebaseInit.getAuth(),
      `+91${mobileNo}`,
      _window.recaptchaVerifier
    );
  }
}
