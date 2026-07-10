import React from "react";
import styles from "./HeaderDisplay.module.css";
const HeaderDisplay: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.productHeading}>Himiway Electric Bike</h1>
      <section className={styles.cta}>
        <h2>The Conqueror Electric Bike</h2>
        <p>Conquer every trail. Redefine your ride with unmatched power.</p>

        <button className={styles.ctaButton} type={"button"}>
          SHOP THE HIMIWAY ELECTRIC BIKE
        </button>
      </section>
    </header>
  );
};

export default HeaderDisplay;
