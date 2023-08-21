import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../config/firebase";
import { _window } from "@/config/window";

export class FirebaseAuth {
  public static sendFirebaseOTP(mobileNo: string) {
    return signInWithPhoneNumber(
      auth,
      `+91${mobileNo}`,
      _window.recaptchaVerifier
    );
  }
}
