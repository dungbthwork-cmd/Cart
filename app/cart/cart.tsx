"use client";
import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Image from "next/image";
import ProductDetails from "../../components/product-details1";
import ItemDetails from "../../components/item-details";
import styles from "./cart.module.css";

const Cart: NextPage = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.signupBannerContent}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
        <Image
          className={styles.signupBannerImage}
          width={20}
          height={20}
          sizes="100vw"
          alt=""
          src="/Signup-Banner-Image.svg"
        />
      </div>
      <Image
        className={styles.frameIcon}
        width={24}
        height={24}
        sizes="100vw"
        alt=""
        src="/Navbar.svg"
      />
      <div className={styles.frameParent}>
        <Image
          className={styles.cartFrameIcon}
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/Placeholder.svg"
        />
        <Image
          className={styles.cartFrameIcon}
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/Header-Icons.svg"
        />
        <Image
          className={styles.cartFrameIcon}
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/Header-Icons2.svg"
        />
      </div>
      <b className={styles.shopco}>SHOP.CO</b>
      <div className={styles.shopcoParent}>
        <h2 className={styles.cartShopco}>SHOP.CO</h2>
        <div className={styles.frameGroup}>
          <Form.Select className={styles.frameFormselect} />
          <div className={styles.onSale}>On Sale</div>
          <div className={styles.onSale}>New Arrivals</div>
          <div className={styles.onSale}>Brands</div>
        </div>
        <div className={styles.frameContainer}>
          <Image
            className={styles.cartFrameIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/Frame6.svg"
          />
          <input
            className={styles.searchForProducts}
            placeholder="Search for products..."
            type="text"
          />
        </div>
        <div className={styles.headerIconsParent}>
          <Image
            className={styles.cartFrameIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/Header-Icons.svg"
          />
          <Image
            className={styles.cartFrameIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/Header-Icons2.svg"
          />
        </div>
      </div>
      <div className={styles.cartHeader}>
        <div className={styles.breadcrumbs}>
          <div className={styles.onSale}>Home</div>
          <Image
            className={styles.frameIcon5}
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src="/Frame@2x.png"
          />
        </div>
        <div className={styles.cart2}>Cart</div>
      </div>
      <div className={styles.cartChild} />
      <main className={styles.rectangleParent}>
        <footer className={styles.groupChild} />
        <div className={styles.groupItem} />
        <header className={styles.stayUptoDateAboutOurLatesParent}>
          <h1 className={styles.stayUptoDate}>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className={styles.frameDiv}>
            <div className={styles.cartFrameParent}>
              <Image
                className={styles.cartFrameIcon}
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/Frame4.svg"
              />
              <input
                className={styles.searchForProducts}
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
        </header>
        <section className={styles.footerDetailsParent}>
          <div className={styles.footerDetails}>
            <div className={styles.brandDetails}>
              <h2 className={styles.cartShopco}>SHOP.CO</h2>
              <div className={styles.weHaveClothes}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </div>
            </div>
            <div className={styles.social}>
              <Image
                className={styles.footerSpacingIcon}
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/Footer-Spacing4.svg"
              />
              <Image
                className={styles.cartFooterSpacingIcon}
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/Footer-Spacing3.svg"
              />
              <Image
                className={styles.footerSpacingIcon2}
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/Footer-Spacing2.svg"
              />
              <Image
                className={styles.footerSpacingIcon3}
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/Footer-Spacing.svg"
              />
            </div>
          </div>
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
          <div className={styles.helpMenuParent}>
            <div className={styles.helpMenu}>Help</div>
            <div className={styles.aboutFeaturesWorksContainer}>
              <p className={styles.blankLine}>Customer Support</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Delivery Details</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>{`Terms & Conditions`}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Privacy Policy</p>
            </div>
          </div>
          <div className={styles.helpMenuParent}>
            <div className={styles.helpMenu}>FAQ</div>
            <div className={styles.aboutFeaturesWorksContainer2}>
              <p className={styles.blankLine}>Account</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Manage Deliveries</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Orders</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Payments</p>
            </div>
          </div>
          <div className={styles.helpMenuParent}>
            <div className={styles.helpMenu}>Resources</div>
            <div className={styles.aboutFeaturesWorksContainer}>
              <p className={styles.blankLine}>Free eBooks</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Development Tutorial</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>How to - Blog</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Youtube Playlist</p>
            </div>
          </div>
        </section>
        <div className={styles.badgeImages}>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={46.6}
              height={30}
              sizes="100vw"
              alt=""
              src="/Badge4.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={46.6}
              height={30}
              sizes="100vw"
              alt=""
              src="/Badge.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={46.6}
              height={30}
              sizes="100vw"
              alt=""
              src="/Badge3.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={46.6}
              height={30}
              sizes="100vw"
              alt=""
              src="/Badge2.svg"
            />
          </div>
          <div className={styles.wrapperBadge}>
            <Image
              className={styles.badgeIcon}
              width={46.6}
              height={30}
              sizes="100vw"
              alt=""
              src="/Badge5.svg"
            />
          </div>
        </div>
        <div className={styles.allRightsReserved}>
          Shop.co © 2000-2023, All Rights Reserved
        </div>
      </main>
      <h1 className={styles.yourCart}>Your cart</h1>
      <section className={styles.itemInfo}>
        <ProductDetails
          gradientGraphicTShirt="Gradient Graphic T-shirt"
          price="$145"
        />
        <ItemDetails
          gradientGraphicTShirt="Gradient Graphic T-shirt"
          prop="$145"
        />
        <div className={styles.itemDetails} />
        <ProductDetails
          productDetailsFlex="unset"
          gradientGraphicTShirt="Checkered Shirt"
          price="$180"
          actionButtonOverflowX="unset"
          actionButtonOverflow="hidden"
        />
        <ItemDetails itemNamesMinWidth="unset" prop="$180" />
        <div className={styles.itemDetails} />
        <ProductDetails
          productDetailsFlex="unset"
          gradientGraphicTShirt="Skinny Fit Jeans"
          price="$240"
          actionButtonOverflowX="unset"
          actionButtonOverflow="hidden"
        />
        <ItemDetails itemNamesMinWidth="unset" prop="$240" />
      </section>
      <section className={styles.orderDetails}>
        <h3 className={styles.cartShopco}>Order Summary</h3>
        <div className={styles.cartOrderDetails}>
          <div className={styles.subtotalParent}>
            <h3 className={styles.subtotal}>Subtotal</h3>
            <h3 className={styles.h3}>$565</h3>
          </div>
          <div className={styles.subtotalParent}>
            <h3 className={styles.subtotal}>Discount (-20%)</h3>
            <h3 className={styles.cartH3}>-$113</h3>
          </div>
          <div className={styles.subtotalParent}>
            <h3 className={styles.subtotal}>Delivery Fee</h3>
            <h3 className={styles.h3}>$15</h3>
          </div>
          <div className={styles.itemDetails} />
          <div className={styles.totalParent}>
            <h3 className={styles.subtotal}>Total</h3>
            <h3 className={styles.h33}>$467</h3>
          </div>
        </div>
        <div className={styles.promoCodeInputParent}>
          <div className={styles.frameContainer}>
            <Image
              className={styles.cartFrameIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Frame8.svg"
            />
            <input
              className={styles.searchForProducts}
              placeholder="Add promo code"
              type="text"
            />
          </div>
          <button className={styles.applyWrapper}>
            <div className={styles.apply}>Apply</div>
          </button>
        </div>
        <button className={styles.goToCheckoutParent}>
          <div className={styles.apply}>Go to Checkout</div>
          <Image
            className={styles.arrowDownBold1Icon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/arrow-down-bold-1@2x.png"
          />
        </button>
      </section>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <Image
              className={styles.frameIcon8}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Subscribe-Button.svg"
            />
            <input
              className={styles.cartEnterYourEmail}
              placeholder="Enter your email address"
              type="text"
            />
          </div>
          <button className={styles.subscribeToNewsletterContainer}>
            <div className={styles.cartSubscribeToNewsletter}>
              Subscribe to Newsletter
            </div>
          </button>
          <b className={styles.cartStayUptoDate}>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </b>
        </div>
        <b className={styles.shopco3}>SHOP.CO</b>
        <div className={styles.cartWeHaveClothes}>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </div>
        <div className={styles.cartSocial}>
          <Image
            className={styles.icon}
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src="/Footer-Spacing4.svg"
          />
          <Image
            className={styles.cartIcon}
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
        <div className={styles.helpMenuParent2}>
          <div className={styles.helpMenu}>Company</div>
          <div className={styles.aboutFeaturesWorksContainer4}>
            <p className={styles.about}>{`About          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.about}>{`Features          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.about}>{`Works          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.about}>{`Career  `}</p>
          </div>
        </div>
        <div className={styles.helpMenuParent3}>
          <div className={styles.helpMenu}>FAQ</div>
          <div className={styles.aboutFeaturesWorksContainer5}>
            <p className={styles.blankLine}>Account</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Manage Deliveries</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Orders</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Payment</p>
          </div>
        </div>
        <div className={styles.helpMenuParent4}>
          <div className={styles.helpMenu}>HELP</div>
          <div className={styles.aboutFeaturesWorksContainer5}>
            <p className={styles.blankLine}>Customer Support</p>
            <p className={styles.blankLine}> Delivery Details</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>{`Terms & Conditions`}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Privacy Policy</p>
          </div>
        </div>
        <div className={styles.helpMenuParent5}>
          <div className={styles.helpMenu}>RESOURCES</div>
          <div className={styles.aboutFeaturesWorksContainer7}>
            <p className={styles.blankLine}>Free eBook</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Development Tutorial</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>How to - Blog</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Youtube Playlist</p>
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.cartAllRightsReserved}>
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <div className={styles.wrapperBadgeParent}>
          <div className={styles.wrapperBadge5}>
            <Image
              className={styles.badgeIcon5}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge7.svg"
            />
          </div>
          <div className={styles.wrapperBadge5}>
            <Image
              className={styles.badgeIcon5}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge1.svg"
            />
          </div>
          <div className={styles.wrapperBadge5}>
            <Image
              className={styles.badgeIcon5}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge6.svg"
            />
          </div>
          <div className={styles.wrapperBadge5}>
            <Image
              className={styles.badgeIcon5}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge9.svg"
            />
          </div>
          <div className={styles.wrapperBadge5}>
            <Image
              className={styles.badgeIcon5}
              width={40}
              height={25.7}
              sizes="100vw"
              alt=""
              src="/Badge8.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
