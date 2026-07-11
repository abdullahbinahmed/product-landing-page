import React from "react";
import styles from "./ProductDescription.module.css";
import DescriptionImage from "../../assets/himiway-ebike-description-image.webp";
const ProductDescription: React.FC = () => {
  return (
    <div className={styles.productDescriptionContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={DescriptionImage}
          className={styles.descriptionImage}
          alt="Product Description"
        />
      </div>
      <div className={styles.textWrapper}>
        <h4 className={styles.productHeading}>WHY WE MADE THIS</h4>
        <p className={styles.productDescription}>
          Built for riders who refuse to be limited by pavement, the Himiway
          All-Terrain Cruiser blends raw power with rugged durability. From
          steep mountain passes to loose rocky trails and city streets, it
          delivers an unmatched, seamless ride.
          <br />
          <br />
          Puncture-resistant 4" fat tires and a high-capacity battery unlock
          maximum stability and extended range. With a robust stealth-black
          frame, responsive front suspension, and a high-torque hub motor, no
          terrain is off-limits. Escape the ordinary and master the outdoors.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
