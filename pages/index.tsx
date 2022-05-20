import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner
        title="Clifford the red dog"
        subtitle="A very cute dog"
        imgUrl="static/clify.jpg"
      />
      <h1> Netflix</h1>
    </div>
  );
};

export default Home;
