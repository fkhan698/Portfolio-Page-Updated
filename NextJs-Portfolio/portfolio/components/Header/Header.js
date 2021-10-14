import React from "react";
import { useState } from "react";
import styles from "../Header/HeaderStyle.module.css";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon} href="https://google.com">
            <AiFillGithub size="3rem" />
          </div>
          <div className={styles.icon} href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </div>
          <div className={styles.icon} href="https://google.com">
            <AiFillInstagram size="3rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
