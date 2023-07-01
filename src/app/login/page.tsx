"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
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
              className={styles.inpNo}
              type="number"
              placeholder="Mobile number"
            ></input>
          </div>
          <div className={styles.btnSendContainer}>
            <button type="submit" className={styles.btnSend}>
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
      <div className={styles.strip}></div>
    </div>
  );
}
