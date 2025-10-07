"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./order-details.module.scss";

export type OrderDetailsType = {
  className?: string;
};

const OrderDetails: NextPage<OrderDetailsType> = ({ className = "" }) => {
  return (
    <section className={[styles.orderDetails, className].join(" ")}>
      <div className={styles.summaryDetails}>
        <h3 className={styles.orderSummary}>Order Summary</h3>
        <div className={styles.orderDetails2}>
          <div className={styles.priceBreakdown}>
            <div className={styles.subtotal}>Subtotal</div>
            <b className={styles.priceValues}>$565</b>
          </div>
          <div className={styles.priceBreakdown}>
            <div className={styles.subtotal}>Discount (-20%)</div>
            <b className={styles.b}>-$113</b>
          </div>
          <div className={styles.priceBreakdown}>
            <div className={styles.subtotal}>Delivery Fee</div>
            <b className={styles.priceValues}>$15</b>
          </div>
          <div className={styles.orderDetailsChild} />
          <div className={styles.summaryItems}>
            <div className={styles.subtotal}>Total</div>
            <h3 className={styles.promoCode}>$467</h3>
          </div>
        </div>
        <div className={styles.orderDetailsPromoCode}>
          <div className={styles.promoInput}>
            <Image
              className={styles.promoCodeField}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Promo-Code-Field.svg"
            />
            <input
              className={styles.addPromoCode}
              placeholder="Add promo code"
              type="text"
            />
          </div>
          <button className={styles.applyButton}>
            <div className={styles.apply}>Apply</div>
          </button>
        </div>
        <button className={styles.checkoutButton}>
          <div className={styles.apply}>Go to Checkout</div>
          <Image
            className={styles.arrowDownBold1Icon}
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/arrow-down-bold-11@2x.png"
          />
        </button>
      </div>
    </section>
  );
};

export default OrderDetails;
