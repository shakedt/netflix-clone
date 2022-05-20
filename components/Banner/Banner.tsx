import React from "react";
import styles from "./Banner.module.css";

interface ibanner {
  title: string;
  subtitle: string;
  imgUrl: string;
}

const Banner = (props: ibanner) => {
  const { title, subtitle, imgUrl } = props;

  const handleClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.leftWarpper}>
        <div className={styles.left}></div>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.playBtnWrapper}></div>
        <button className={styles.btnWithIcon} onClick={handleClick}>
          Play
        </button>
      </div>
      <div
        className={styles.bannerImage}
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></div>
    </div>
  );
};

export default Banner;
