import React from "react";
import styles from "../navigation/NavStyle.module.css";
export default function navbar() {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navLinks}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
