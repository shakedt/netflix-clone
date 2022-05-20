import React from "react";
import Image from "next/image";

import styles from "./Banner.module.css";
interface ibanner {
  title: string;
  subTitle: string;
  imgUrl: string;
}

const Banner = (props: ibanner) => {
  const { title, subTitle, imgUrl } = props;

  const handleClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>etflix clone</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleClick}>
              <Image
                src="/static/PlayButton.svg"
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
