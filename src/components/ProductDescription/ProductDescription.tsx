import React from "react";
import styles from "./ProductDescription.module.css";
const ProductDescription: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <h2 className={styles.productHeading}>Himiway Electric Bike</h2>
      <p className={styles.productDescription}>
        Built for those who refuse to be limited by the pavement, the Himiway
        All-Terrain Electric Cruiser blends raw power with rugged durability.
        Whether you are navigating steep mountain passes, loose rocky trails, or
        dense city streets, this e-bike delivers an unmatched, seamless riding
        experience. Featuring massive, puncture-resistant 4-inch fat tires and a
        high-capacity integrated battery network, it provides maximum traction,
        stability, and an extended range that keeps you exploring longer. With
        its robust, stealth-black frame architecture, responsive front
        suspension fork, and high-torque hub motor, no terrain is off-limits.
        Escape the ordinary and master the outdoors.
      </p>
    </header>
  );
};

export default ProductDescription;
