"use client";
import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "./frame-component4";
import styles from "./frame-component1.module.scss";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.createAccountWrapper}>
            <h1 className={styles.createAccount}>Create Account</h1>
          </div>
          <div className={styles.joinShopcoAnd}>
            Join SHOP.CO and start shopping
          </div>
        </div>
      </div>
      <div className={styles.inputLabelParent}>
        <div className={styles.inputLabel}>
          <div className={styles.firstName}>First Name</div>
          <div className={styles.firstName}>Last Name</div>
        </div>
        <div className={styles.dataInput}>
          <div className={styles.emailData}>
            <div className={styles.rectangle2} />
            <input className={styles.john} placeholder="John" type="text" />
          </div>
          <div className={styles.doeData}>
            <div className={styles.rectangle2} />
            <input className={styles.john} placeholder="Doe" type="text" />
          </div>
        </div>
      </div>
      <FrameComponent
        emailAddress="Email Address"
        placeholder="john.doe@example.com"
      />
      <div className={styles.inputLabelParent}>
        <div className={styles.firstName}>Password</div>
        <div className={styles.passwordHelper}>
          <div className={styles.rectangle4} />
          <input
            className={styles.createAStrong}
            placeholder="Create a strong password"
            type="text"
          />
          <Image
            className={styles.boxIcon}
            width={20}
            height={20}
            sizes="100vw"
            alt=""
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.boxesWrapper}>
              <div className={styles.boxes} />
            </div>
            <div className={styles.upperLowercase}>At least 8 characters</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.boxesWrapper}>
              <div className={styles.boxes} />
            </div>
            <div
              className={styles.upperLowercase}
            >{`Upper & lowercase letters`}</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.boxesWrapper}>
              <div className={styles.boxes} />
            </div>
            <div className={styles.upperLowercase}>At least one number</div>
          </div>
        </div>
      </div>
      <FrameComponent
        emailAddress="Confirm Password"
        placeholder="Confirm your password"
        frameDivAlignItems="flex-start"
      />
      <div className={styles.agreeBoxParent}>
        <input className={styles.agreeBox} type="checkbox" />
        <div className={styles.iAgreeTo}>I agree to the</div>
        <div className={styles.termsOfService}>Terms of Service</div>
        <div className={styles.iAgreeTo}>and</div>
        <div className={styles.termsOfService}>Privacy Policy</div>
      </div>
      <div className={styles.submitButtonWrapper}>
        <button className={styles.submitButton}>
          <div className={styles.rectangle7} />
          <div className={styles.rectangleParentCreateAccount}>
            Create Account
          </div>
        </button>
      </div>
      <div className={styles.socialConnectWrapper}>
        <div className={styles.socialConnect}>
          <div className={styles.rectangle8} />
          <div className={styles.orSignUp}>Or sign up with</div>
        </div>
      </div>
      <div className={styles.socialIcon}>
        <button className={styles.iconPair}>
          <div className={styles.rectangle9} />
          <Image
            className={styles.boxIcon}
            width={20}
            height={20}
            sizes="100vw"
            alt=""
          />
        </button>
        <button className={styles.rectangleParentIconPair}>
          <div className={styles.rectangle9} />
          <Image
            className={styles.boxIcon}
            width={20}
            height={20}
            sizes="100vw"
            alt=""
          />
        </button>
      </div>
      <div className={styles.accountAction}>
        <div className={styles.alreadyHaveAnAccountParent}>
          <div className={styles.firstName}>Already have an account?</div>
          <div className={styles.signIn}>Sign in</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
