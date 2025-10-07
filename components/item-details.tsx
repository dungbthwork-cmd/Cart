"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./item-details.module.scss";

export type ItemDetailsType = {
  className?: string;
  gradientGraphicTShirt?: string;
  prop?: string;

  /** Style props */
  itemNamesMinWidth?: CSSProperties["minWidth"];
};

const ItemDetails: NextPage<ItemDetailsType> = ({
  className = "",
  itemNamesMinWidth,
  gradientGraphicTShirt,
  prop,
}) => {
  const itemNamesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: itemNamesMinWidth,
    };
  }, [itemNamesMinWidth]);

  return (
    <div className={[styles.itemDetails, className].join(" ")}>
      <Image
        className={styles.itemDetailsChild}
        width={124}
        height={124}
        sizes="100vw"
        alt=""
        src="/Frame-33@2x.png"
      />
      <div className={styles.itemNamesParent}>
        <div className={styles.itemNames} style={itemNamesStyle}>
          <div className={styles.itemName}>
            <h3 className={styles.gradientGraphicTShirt}>
              {gradientGraphicTShirt}
            </h3>
            <div className={styles.sizeLargeParent}>
              <div className={styles.sizeLarge}>
                <span>{`Size: `}</span>
                <span className={styles.large}>Large</span>
              </div>
              <div className={styles.sizeLarge}>
                <span>{`Color: `}</span>
                <span className={styles.large}>White</span>
              </div>
            </div>
          </div>
          <h3 className={styles.h3}>{prop}</h3>
        </div>
        <div className={styles.itemButtonsParent}>
          <Image
            className={styles.itemButtonsIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/Frame2.svg"
          />
          <div className={styles.itemButtons}>
            <Image
              className={styles.itemDetailsItemButtonsIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Frame3.svg"
            />
            <div className={styles.div}>1</div>
            <Image
              className={styles.itemDetailsItemButtonsIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Frame7.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
