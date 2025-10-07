"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer-bottom.module.scss";

export type FooterBottomType = {
  className?: string;
};

const FooterBottom: NextPage<FooterBottomType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footerBottom, className].join(" ")}>
      <div className={styles.footerBottomChild} />
      <div className={styles.allRightsReservedWrapper}>
        <div className={styles.allRightsReserved}>
          Shop.co © 2000-2023, All Rights Reserved
        </div>
      </div>
      <div className={styles.socialIcons}>
        <div className={styles.wrapperBadgeParent}>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge7.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge1.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge6.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge9.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge8.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
