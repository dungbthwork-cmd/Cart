"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./view.module.css";

export type ViewType = {
  className?: string;
};

const View: NextPage<ViewType> = ({ className = "" }) => {
  return (
    <section className={[styles.view, className].join(" ")}>
      <header className={styles.signUpAndGet20OffToYouWrapper}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
      </header>
      <div className={styles.navigationView}>
        <div className={styles.logo}>
          <div className={styles.brandView}>
            <Image
              className={styles.frameIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Navbar.svg"
            />
            <div className={styles.shopcoLink}>
              <b className={styles.shopco}>SHOP.CO</b>
            </div>
          </div>
          <div className={styles.frameParent}>
            <Image
              className={styles.viewFrameIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Placeholder.svg"
            />
            <Image
              className={styles.viewFrameIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Header-Icons.svg"
            />
            <Image
              className={styles.viewFrameIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Header-Icons2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerChild} />
      </div>
      <div className={styles.actionView}>
        <div className={styles.actionInnerView}>
          <div className={styles.linksView}>
            <div className={styles.homeParent}>
              <div className={styles.signUpAndContainer}>Home</div>
              <Image
                className={styles.cartPlaceholderIcon}
                width={14}
                height={14}
                sizes="100vw"
                alt=""
                src="/Cart-Placeholder@2x.png"
              />
            </div>
            <div className={styles.cart}>Cart</div>
          </div>
          <h1 className={styles.yourCart}>Your cart</h1>
        </div>
      </div>
    </section>
  );
};

export default View;
