import { FC } from "react";
import styles from "./ThirdMainPart.module.scss";
import { useMediaQuery } from "react-responsive";
import amazon from "../../static/png/3_1.png";
import walmart from "../../static/png/3_2.png";
import tiktok from "../../static/png/3_3.png";
import meta from "../../static/png/3_4.png";
import google from "../../static/png/3_5.png";
import amazonD from "../../static/png/amazonD.png";
import walmartD from "../../static/png/welmartD.png";
import tiktokD from "../../static/png/titokD.png";
import metaD from "../../static/png/metaD.png";
import googleD from "../../static/png/googleD.png";
import ScorePanel from "../ScorePanel/ScorePanel";
import { thirdData } from "./data";

const ThirdMainPart: FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1920px)",
  });

  return (
    <div>
      {isDesktop && (
        <h2 className={styles.sectionTitle}>Customer's Love Their Results</h2>
      )}
      {!isDesktop && <h2 className={styles.sectionTitle}>Customers Results</h2>}
      <div className={styles.list}>
        {thirdData &&
          thirdData.map(({ text, title, src, author }) => (
            <div className={styles.card}>
              <div className={styles.smallWrapper}>
                <iframe
                  className={styles.video}
                  src={src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className={styles.cardContentBox}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <ScorePanel className={styles.scorePanel} />
                <div className={styles.cardTextWrapper}>
                  <p className={styles.cardText}>{text}</p>
                  <span className={styles.author}>{author}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h2 className={styles.secondaryTitle}>As Seen On</h2>
      <div className={styles.logoList}>
        <img
          className={styles.logoImage}
          src={!isDesktop ? amazon : amazonD}
          alt=""
        />

        <div className={styles.fakeBorder}></div>

        <img
          className={styles.logoImage}
          src={!isDesktop ? walmart : walmartD}
          alt=""
        />

        <div className={styles.fakeBorder}></div>

        <img
          className={styles.logoImage}
          src={!isDesktop ? tiktok : tiktokD}
          alt=""
        />

        {isDesktop && <div className={styles.fakeBorder}></div>}

        <img
          className={styles.logoImage}
          src={!isDesktop ? meta : metaD}
          alt=""
        />

        <div className={styles.fakeBorder}></div>

        <img
          className={styles.logoImage}
          src={!isDesktop ? google : googleD}
          alt=""
        />
      </div>
    </div>
  );
};

export default ThirdMainPart;
