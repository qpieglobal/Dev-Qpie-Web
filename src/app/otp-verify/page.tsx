"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { _window } from "@/config/window";
import { useRouter } from "next/navigation";
import { FirebaseAuth } from "@/services/firebase-auth";
import { auth, createRecaptchaVerifier } from "@/config/firebase";

export default function OTPVerify() {
  useEffect(() => {
    createRecaptchaVerifier(auth);
  }, []);
  const { push } = useRouter();
  const [otp, setOtp] = useState("");
  function resendOTP() {
    // TODO implement resend OTP
    FirebaseAuth.sendFirebaseOTP(_window.moNo)
      .then((confirmationResult) => {
        _window.confirmationResult = confirmationResult;
        console.log("otp-sent", confirmationResult);
      })
      .catch((error) => {
        console.error("error sending otp", error);
      });
  }
  function verifyOTP() {
    _window.confirmationResult
      .confirm(otp)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        console.log("otp-verify", result);

        push("/home");
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)

        console.error("Error in verifying the OTP", error);
      });
  }
  return (
    <div className={styles.otpVerify}>
      <div className={styles.topBar}>
        <div className={styles.qpieImage}>
          {" "}
          <Image src="/Qpie.png" alt="Qpie logo" width={203} height={93} />
        </div>
      </div>
      <div className={styles.otpBox}>
        <div className={styles.otpHeading}>
          <div className={styles.title}>OTP Verification</div>
          <div className={styles.toMobileNo}>
            sent SMS on +91 {_window?.moNo?.slice(0, -4) + "XXXX"}
          </div>
        </div>
        <div className={styles.otpInput}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => (
              <input {...props} className={styles.otpItem} />
            )}
          />
        </div>
        <div className={styles.retry}>
          <div className={styles.retryMsg}>Did not receive OTP?</div>
          <div className={styles.resendButtonContainer}>
            <button className={styles.resendButton} onClick={resendOTP}>
              Resend OTP
            </button>
          </div>
        </div>
        <div className={styles.verifyButtonContainer}>
          <button className={styles.verifyOtpButton} onClick={verifyOTP}>
            Verify And Proceed
          </button>
        </div>
      </div>
      <div id="_recaptcha"></div>
    </div>
  );
}
