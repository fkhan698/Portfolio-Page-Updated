import Head from "next/head";
import Image from "next/image";
import Herro from "../components/Herro/Herro.js";
import Projects from "../components/Projects/Projects.js";
import styles from "../styles/Home.module.css";
import { Layout } from "../layouts/Layout.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Faizan Khan</title>
        <meta
          name="description"
          content="Faizan Khan Portfolio Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Herro></Herro>
        <Projects></Projects>
      </Layout>
    </div>
  );
};

export default Home;
