"use client";
import type { NextPage } from "next";
import styles from "./product-details.module.scss";

export type ProductDetails1Type = {
  className?: string;
};

const ProductDetails1: NextPage<ProductDetails1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.productDetails, className].join(" ")}>
      <div className={styles.productCard}>
        <div className={styles.frameParent}>
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
                  Gradient Graphic T-shirt
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
              <b className={styles.gradientGraphicTShirt}>$145</b>
              <div className={styles.frameDiv}>
                <Image
                  className={styles.productDetailsFrameIcon}
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/Add-Button.svg"
                />
                <div className={styles.div}>1</div>
                <Image
                  className={styles.productDetailsFrameIcon}
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
        <div className={styles.productDetails2} />
        <div className={styles.frameParent}>
          <Image
            className={styles.frameChild}
            width={99}
            height={99}
            sizes="100vw"
            alt=""
            src="/Frame-331@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.gradientGraphicTShirtParent}>
                <b className={styles.gradientGraphicTShirt}>Checkered Shirt</b>
                <div className={styles.sizeLargeParent}>
                  <div className={styles.gradientGraphicTShirt}>
                    <span>{`Size: `}</span>
                    <span className={styles.large}>Medium</span>
                  </div>
                  <div className={styles.gradientGraphicTShirt}>
                    <span>{`Color: `}</span>
                    <span className={styles.large}>Red</span>
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
              <b className={styles.gradientGraphicTShirt}>$180</b>
              <div className={styles.frameDiv}>
                <Image
                  className={styles.productDetailsFrameIcon}
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/Add-Button.svg"
                />
                <div className={styles.div}>1</div>
                <Image
                  className={styles.productDetailsFrameIcon}
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
        <div className={styles.productDetails2} />
        <div className={styles.frameParent}>
          <Image
            className={styles.frameChild}
            width={99}
            height={99}
            sizes="100vw"
            alt=""
            src="/Frame-334@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.gradientGraphicTShirtParent}>
                <b className={styles.gradientGraphicTShirt}>Skinny Fit Jeans</b>
                <div className={styles.sizeLargeParent}>
                  <div className={styles.gradientGraphicTShirt}>
                    <span>{`Size: `}</span>
                    <span className={styles.large}>Large</span>
                  </div>
                  <div className={styles.gradientGraphicTShirt}>
                    <span>{`Color: `}</span>
                    <span className={styles.large}>Blue</span>
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
              <b className={styles.gradientGraphicTShirt}>$240</b>
              <div className={styles.frameDiv}>
                <Image
                  className={styles.productDetailsFrameIcon}
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/Add-Button.svg"
                />
                <div className={styles.div}>1</div>
                <Image
                  className={styles.productDetailsFrameIcon}
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
      </div>
    </section>
  );
};

export default ProductDetails1;
