"use client";
import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./register-form.module.css";

export type RegisterFormType = {
  className?: string;
};

const RegisterForm: NextPage<RegisterFormType> = ({ className = "" }) => {
  return (
    <div className={[styles.registerForm, className].join(" ")}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.background} />
      </div>
      <FrameComponent1 />
    </div>
  );
};

export default RegisterForm;
