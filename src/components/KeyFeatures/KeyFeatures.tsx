import React from "react";
import styles from "./KeyFeatures.module.css";
import { GiAnvilImpact } from "react-icons/gi";
import { GoZap } from "react-icons/go";
import { IoSpeedometerOutline } from "react-icons/io5";

const KeyFeatures: React.FC = () => {
  return (
    <section className={styles.keyFeatures}>
      <div>
        <div className={styles.iconWrapper}>
          <GoZap />
        </div>
        <h2>Limitless Range</h2>
        <p>
          Equipped with a high-capacity, integrated power cell engineered to
          take you further. Go the distance on a single charge and explore the
          wild without limits.
        </p>
      </div>
      <div>
        <div className={styles.iconWrapper}>
          <GiAnvilImpact />
        </div>
        <h2>All-Terrain Dominance</h2>
        <p>
          From loose gravel and steep mountain ascents to snow and sand, the
          ultra-wide fat tires and high-torque motor ensure total traction and
          control on any surface.
        </p>
      </div>
      <div>
        <div className={styles.iconWrapper}>
          <IoSpeedometerOutline />
        </div>
        <h2>High-Torque Power</h2>
        <p>
          Flatten steep inclines and conquer headwinds effortlessly. The premium
          rear-hub motor delivers instantaneous acceleration and responsive
          power exactly when you need it.
        </p>
      </div>
    </section>
  );
};

export default KeyFeatures;
