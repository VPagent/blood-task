import { FC } from "react";
import styles from "./ThirdMainPart.module.scss";
import { useMediaQuery } from "react-responsive";
import amazon from "../../static/png/image80.png";
import walmart from "../../static/png/image82.png";
import tiktok from "../../static/png/image83.png";
import meta from "../../static/png/image84.png";
import google from "../../static/png/image85.png";

const ThirdMainPart: FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1920px)",
  });

  return (
    <div>
      {isDesktop && <h2>Customer's Love Their Results</h2>}
      {!isDesktop && <h2>Customers Results</h2>}
      <div className={styles.list}>
        <div className={styles.card}>
          <iframe
            className={styles.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JFFq8xgBQZI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div>
            <h3>"My blood pressure has dropped"</h3>
            <span>stars</span>
            <p>
              "It was pretty good. My blood pressure has dropped and I've been
              feeling pretty good. I got more energy too."
            </p>
            <span>—Dwight C.</span>
          </div>
        </div>
        <div className={styles.card}>
          <iframe
            className={styles.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JFFq8xgBQZI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share, fullscreen"
          ></iframe>
          <div>
            <h3>"This has really worked for me"</h3>
            <span>stars</span>
            <p>
              "I was really happy that the day after I started taking this, my
              BP dropped into the “green” range. 120/60 has been something I
              have been unable to achieve in years on various BP meds. Now I
              achieve numbers like that regularly. I do not yet know what
              combination of meds and supplements will be the final solution
              though I have no doubt this will be an important part of it. Thank
              you!"
            </p>
            <span>—David B.</span>
          </div>
        </div>
      </div>
      <h2>As Seen On</h2>
      <div className={styles.logoList}>
        <img src={amazon} alt="" />
        <img src={walmart} alt="" />
        <img src={tiktok} alt="" />
        <img src={meta} alt="" />
        <img src={google} alt="" />
      </div>
    </div>
  );
};

export default ThirdMainPart;
