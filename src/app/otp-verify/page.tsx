"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import OTPInput from "react-otp-input";

export default function OTPVerify() {
  const [otp, setOtp] = useState("");
  function resendOTP() {
    // TODO implement resend OTP
  }
  function verifyOTP() {
    // TODO implement verify OTP
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
            sent SMS on +91 {window?.moNo?.slice(0, -4) + "XXXX"}
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
    </div>
  );
}
