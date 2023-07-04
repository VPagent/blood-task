import { FC } from "react";
import styles from "./ThirdMainPart.module.scss";
import { useMediaQuery } from "react-responsive";
import amazon from "../../static/png/3_1.png";
import walmart from "../../static/png/3_2.png";
import tiktok from "../../static/png/3_3.png";
import meta from "../../static/png/3_4.png";
import google from "../../static/png/3_5.png";
import ScorePanel from "../ScorePanel/ScorePanel";

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
        <div className={styles.card}>
          <div className={styles.smallWrapper}>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JFFq8xgBQZI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className={styles.cardContentBox}>
            <h3 className={styles.cardTitle}>
              "My blood pressure has dropped"
            </h3>
            <ScorePanel className={styles.scorePanel} />
            <div className={styles.smallWrapper}>
              <p className={styles.cardText}>
                "It was pretty good. My blood pressure has dropped and I've been
                feeling pretty good. I got more energy too."
              </p>
              <span className={styles.author}>—Dwight C.</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.smallWrapper}>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JFFq8xgBQZI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share, fullscreen"
            ></iframe>
          </div>
          <div className={styles.cardContentBox}>
            <h3 className={styles.cardTitle}>
              "This has really worked for me"
            </h3>
            <ScorePanel className={styles.scorePanel} />
            <div className={styles.smallWrapper}>
              <p className={styles.cardText}>
                "I was really happy that the day after I started taking this, my
                BP dropped into the “green” range. 120/60 has been something I
                have been unable to achieve in years on various BP meds. Now I
                achieve numbers like that regularly. I do not yet know what
                combination of meds and supplements will be the final solution
                though I have no doubt this will be an important part of it.
                Thank you!"
              </p>
            </div>
            <span className={styles.author}>—David B.</span>
          </div>
        </div>
      </div>
      <h2 className={styles.secondaryCardTitle}>As Seen On</h2>
      <div className={styles.logoList}>
        <img className={styles.logoImage} src={amazon} alt="" />

        <div className={styles.fakeBorder}></div>

        <img className={styles.logoImage} src={walmart} alt="" />

        <div className={styles.fakeBorder}></div>

        <img className={styles.logoImage} src={tiktok} alt="" />

        {isDesktop && <div className={styles.fakeBorder}></div>}

        <img className={styles.logoImage} src={meta} alt="" />

        <div className={styles.fakeBorder}></div>

        <img className={styles.logoImage} src={google} alt="" />
      </div>
    </div>
  );
};

export default ThirdMainPart;
