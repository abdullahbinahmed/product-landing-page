import React from "react";
import styles from "./Footer.module.css";
import { FaRegCopyright } from "react-icons/fa";
import { RiUpworkFill } from "react-icons/ri";
import { RiFiverrFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGoogleFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMainContent}>
        <h2>Himiway Electric Bikes</h2>
        <p className={styles.brandTagline}>
          Empowering your journey with all-terrain performance.
        </p>
      </div>
      <div className={styles.contactusWrapper}>
        <h2>CONTACT US</h2>
        <div className={styles.contactusLinksWrapper}>
          <RiFiverrFill className={styles.iconWrapper} />
          <a href="https://www.fiverr.com/s/vvVePZz" target={"_blank"}>
            Fiverr
          </a>
        </div>
        <div className={styles.contactusLinksWrapper}>
          <RiGoogleFill className={styles.iconWrapper} />
          <a href="mailto:smabdullah.binahmed@gmail.com" target={"_blank"}>
            Gmail
          </a>
        </div>
        <div className={styles.contactusLinksWrapper}>
          <RiWhatsappFill className={styles.iconWrapper} />
          <a href="https://wa.me/923238231237" target={"_blank"}>
            Whatsapp
          </a>
        </div>
        <div className={styles.contactusLinksWrapper}>
          <RiUpworkFill className={styles.iconWrapper} />
          <a
            href="https://www.upwork.com/freelancers/smabdullahahmed"
            target={"_blank"}
          >
            Upwork
          </a>
        </div>
        <div className={styles.contactusLinksWrapper}>
          <RiLinkedinFill className={styles.iconWrapper} />
          <a
            href="https://www.linkedin.com/in/smabdullahahmed/"
            target={"_blank"}
          >
            Linkedin
          </a>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.copyrightContainer}>
        <FaRegCopyright className={styles.iconWrapper} />
        <p>2026 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
