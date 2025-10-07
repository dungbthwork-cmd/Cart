"use client";
import type { NextPage } from "next";
import Image from "next/image";
import View from "../../components/view";
import ProductDetails1 from "../../components/product-details";
import OrderDetails from "../../components/order-details";
import FooterColumns from "../../components/footer-columns";
import FooterBottom from "../../components/footer-bottom";
import styles from "./cart1.module.scss";

const Cart1: NextPage = () => {
  return (
    <div className={styles.cart}>
      <View />
      <ProductDetails1 />
      <OrderDetails />
      <section className={styles.yourCart}>
        <div className={styles.newsletterArea}>
          <div className={styles.stayUptoDateAboutOurLatesParent}>
            <b className={styles.stayUptoDate}>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </b>
            <div className={styles.newsletterForm}>
              <div className={styles.frameParent}>
                <Image
                  className={styles.frameIcon}
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/Subscribe-Button.svg"
                />
                <input
                  className={styles.enterYourEmail}
                  placeholder="Enter your email address"
                  type="text"
                />
              </div>
              <button className={styles.subscribeToNewsletterWrapper}>
                <div className={styles.subscribeToNewsletter}>
                  Subscribe to Newsletter
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerChild} />
          <FooterColumns />
          <div className={styles.frameGroup}>
            <div className={styles.helpMenuParent}>
              <div className={styles.helpMenu}>FAQ</div>
              <div className={styles.aboutFeaturesWorksContainer}>
                <p className={styles.account}>Account</p>
                <p className={styles.account}>&nbsp;</p>
                <p className={styles.account}>Manage Deliveries</p>
                <p className={styles.account}>&nbsp;</p>
                <p className={styles.account}>Orders</p>
                <p className={styles.account}>&nbsp;</p>
                <p className={styles.account}>Payment</p>
              </div>
            </div>
            <div className={styles.helpMenuGroup}>
              <div className={styles.helpMenu}>RESOURCES</div>
              <div className={styles.cartAboutFeaturesWorksContainer}>
                <p className={styles.account}>Free eBook</p>
                <p className={styles.account}>&nbsp;</p>
                <p className={styles.account}>Development Tutorial</p>
                <p className={styles.account}>&nbsp;</p>
                <p className={styles.account}>How to - Blog</p>
                <p className={styles.account}>&nbsp;</p>
                <p className={styles.account}>Youtube Playlist</p>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </section>
    </div>
  );
};

export default Cart1;
