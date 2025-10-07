"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer-columns.module.css";

export type FooterColumnsType = {
  className?: string;
};

const FooterColumns: NextPage<FooterColumnsType> = ({ className = "" }) => {
  return (
    <div className={[styles.footerColumns, className].join(" ")}>
      <b className={styles.shopco}>SHOP.CO</b>
      <div className={styles.shopcoDescription}>
        <div className={styles.weHaveClothes}>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </div>
      </div>
      <div className={styles.footerPaddings}>
        <Image
          className={styles.icon}
          width={28}
          height={28}
          sizes="100vw"
          alt=""
          src="/Footer-Spacing4.svg"
        />
        <Image
          className={styles.footerColumnsIcon}
          width={28}
          height={28}
          sizes="100vw"
          alt=""
          src="/Footer-Spacing3.svg"
        />
        <Image
          className={styles.icon2}
          width={28}
          height={28}
          sizes="100vw"
          alt=""
          src="/Footer-Spacing2.svg"
        />
        <Image
          className={styles.icon3}
          width={28}
          height={28}
          sizes="100vw"
          alt=""
          src="/Footer-Spacing.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.helpMenuParent}>
          <div className={styles.helpMenu}>Company</div>
          <div className={styles.aboutFeaturesWorksContainer}>
            <p className={styles.about}>{`About          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.about}>{`Features          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.about}>{`Works          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.about}>{`Career  `}</p>
          </div>
        </div>
        <div className={styles.helpMenuGroup}>
          <div className={styles.helpMenu}>HELP</div>
          <div className={styles.footerColumnsAboutFeaturesWorksContainer}>
            <p className={styles.blankLine}>Customer Support</p>
            <p className={styles.blankLine}> Delivery Details</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>{`Terms & Conditions`}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterColumns;
