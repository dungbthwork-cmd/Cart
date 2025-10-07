"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./product-details1.module.scss";

export type ProductDetailsType = {
  className?: string;
  gradientGraphicTShirt?: string;
  price?: string;

  /** Style props */
  productDetailsFlex?: CSSProperties["flex"];
  actionButtonOverflowX?: CSSProperties["overflowX"];
  actionButtonOverflow?: CSSProperties["overflow"];
};

const ProductDetails: NextPage<ProductDetailsType> = ({
  className = "",
  productDetailsFlex,
  gradientGraphicTShirt,
  price,
  actionButtonOverflowX,
  actionButtonOverflow,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: productDetailsFlex,
    };
  }, [productDetailsFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      overflowX: actionButtonOverflowX,
      overflow: actionButtonOverflow,
    };
  }, [actionButtonOverflowX, actionButtonOverflow]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <Image
        className={styles.frameChild}
        width={99}
        height={99}
        sizes="100vw"
        alt=""
        src="/Product-Image@2x.png"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.gradientGraphicTShirtParent}>
            <b className={styles.gradientGraphicTShirt}>
              {gradientGraphicTShirt}
            </b>
            <div className={styles.sizeLargeParent}>
              <div className={styles.gradientGraphicTShirt}>
                <span>{`Size: `}</span>
                <span className={styles.large}>Large</span>
              </div>
              <div className={styles.gradientGraphicTShirt}>
                <span>{`Color: `}</span>
                <span className={styles.large}>White</span>
              </div>
            </div>
          </div>
          <Image
            className={styles.frameIcon}
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/Frame1.svg"
          />
        </div>
        <div className={styles.parent}>
          <b className={styles.gradientGraphicTShirt}>{price}</b>
          <div className={styles.frameDiv} style={frameDiv1Style}>
            <Image
              className={styles.frameIcon2}
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/Add-Button.svg"
            />
            <div className={styles.div}>1</div>
            <Image
              className={styles.frameIcon2}
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/Frame10.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
