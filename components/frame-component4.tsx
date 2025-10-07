"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component4.module.scss";

export type FrameComponentType = {
  className?: string;
  emailAddress?: string;
  placeholder?: string;

  /** Style props */
  frameDivAlignItems?: CSSProperties["alignItems"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  emailAddress,
  placeholder,
  frameDivAlignItems,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  return (
    <div className={[styles.emailAddressParent, className].join(" ")}>
      <div className={styles.emailAddress}>{emailAddress}</div>
      <div className={styles.rectangleParent} style={frameDiv2Style}>
        <div className={styles.rectangle} />
        <input
          className={styles.johndoeexamplecom}
          placeholder={placeholder}
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
  );
};

export default FrameComponent;
