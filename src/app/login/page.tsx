"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { _window } from "@/config/window";
import { FirebaseAuth } from "@/services/firebase-auth";
import { auth, createRecaptchaVerifier } from "@/config/firebase";

export default function Login() {
  useEffect(() => {
    createRecaptchaVerifier(auth);
  }, []);
  const { push } = useRouter();
  const [mobileNo, setMobileNo] = useState("");
  function getMobileNo(e: any) {
    const mobileNumber = e.target.value;
    if (mobileNumber.length > 10) {
      return;
    }
    setMobileNo(mobileNumber);
  }
  function generateOTP() {
    if (mobileNo.length === 10) {
      _window.moNo = mobileNo;
      FirebaseAuth.sendFirebaseOTP(mobileNo)
        .then((confirmationResult) => {
          _window.confirmationResult = confirmationResult;
          console.log("otp-sent", confirmationResult);
          push("/otp-verify");
        })
        .catch((error) => {
          console.error("error sending otp", error);
        });
    }
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.strip}></div>
      <div className={styles.login_box}>
        <div className={styles.box}>
          <div>
            <Image
              src="/qpie_logo.png"
              alt="Qpie logo"
              width={350}
              height={150}
            />
          </div>
          <div className={styles.mobileNo}>
            <input
              maxLength={10}
              value={mobileNo}
              className={styles.inpNo}
              type="number"
              placeholder="Mobile number"
              onChange={getMobileNo}
            ></input>
          </div>
          <div className={styles.btnSendContainer}>
            <button
              type="submit"
              className={styles.btnSend}
              onClick={generateOTP}
            >
              Receive SMS code
            </button>
          </div>
          <div className={styles.info}>
            <p>
              Please note that by selecting receive SMS code, you are accepting
              to{" "}
            </p>
            <a href="#" className={styles.terms}>
              Terms and conditions and privacy policy of Qpie
            </a>
          </div>
        </div>
        <div className={styles.recover_text}>
          <p>
            <a href="#">Recover your Qpie account</a>
          </p>
        </div>
      </div>
      <div className={styles.strip} id="_recaptcha"></div>
    </div>
  );
}
