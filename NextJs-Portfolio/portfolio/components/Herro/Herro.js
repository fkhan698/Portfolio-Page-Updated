import React from "react";
//import { Container, Title, Name, Image } from "./HerroStyles.js";
import styles from "../../styles/Herro.module.css";
import Image from "next/image";
export default function Herro() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.name}>Welcome to my Portfolio Page</div>
        <div className={styles.title}>
          I am a web developer looking to learn new techbolog
        </div>
        <p>lasdfasdfasdfasfasdfasddfasfasfasdfsda</p>
      </div>
      <div>
        <Image
          className={styles.image}
          src="/assets/headshot2.jpg"
          width="300px"
          height="400px"
          alt="Headshot"
        ></Image>
      </div>
    </div>
  );
}
