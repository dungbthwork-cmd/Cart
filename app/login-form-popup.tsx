"use client";
import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component4";
import styles from "./login-form-popup.module.scss";

const LoginFormPopup: NextPage = () => {
  return (
    <div className={styles.loginFormPopup}>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.welcomeBackWrapper}>
              <h1 className={styles.welcomeBack}>Welcome Back</h1>
            </div>
            <div className={styles.signInTo}>
              Sign in to your SHOP.CO account
            </div>
          </div>
        </div>
        <FrameComponent
          emailAddress="Email"
          placeholder="Enter your email"
          frameDivAlignItems="flex-end"
        />
        <div className={styles.emailPasswordContainer}>
          <div className={styles.password}>Password</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.loginFormPopupRectangle} />
            <input
              className={styles.frameChild}
              placeholder="Enter your password"
              type="text"
            />
            <Image
              className={styles.frameIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <input className={styles.frameInput} type="checkbox" />
            <div className={styles.password}>Remember me</div>
          </div>
          <div className={styles.forgotPassword}>Forgot password?</div>
        </div>
        <button className={styles.rectangleContainer}>
          <div className={styles.rectangle2} />
          <div className={styles.signIn}>Sign In</div>
        </button>
        <div className={styles.frameDiv}>
          <div className={styles.loginFormPopupRectangleParent}>
            <div className={styles.rectangle3} />
            <div className={styles.orContinueWith}>Or continue with</div>
          </div>
        </div>
        <div className={styles.loginFormPopupFrameParent}>
          <button className={styles.frameButton}>
            <div className={styles.rectangle4} />
            <Image
              className={styles.frameIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
          </button>
          <button className={styles.rectangleParent2}>
            <div className={styles.rectangle4} />
            <Image
              className={styles.frameIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
          </button>
        </div>
        <div className={styles.loginFormPopupFrameWrapper}>
          <div className={styles.dontHaveAnAccountParent}>
            <div className={styles.password}>Don't have an account?</div>
            <div className={styles.forgotPassword}>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormPopup;
