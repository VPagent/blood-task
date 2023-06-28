import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./EleventhMainPart.module.scss";
import eleventhImg1 from "../../static/png/11_1.jpg";
import { ReactComponent as EleventhIcon1 } from "../../static/icons/11_1.svg";
import { ReactComponent as EleventhIcon2 } from "../../static/icons/11_2.svg";
import { ReactComponent as EleventhIcon3 } from "../../static/icons/11_3.svg";

const EleventhMainPart: FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div>
      {isDesktop && (
        <div>
          <img src={eleventhImg1} alt="eleventh1" />
        </div>
      )}
      <div className={styles.secondPartWrapper}>
        <h2>Easy to Use</h2>
        {!isDesktop && <img src={eleventhImg1} alt="eleventh1" />}
        <div className={styles.list}>
          <div className={styles.listItem}>
            <EleventhIcon1 />
            <div>
              <h3>Take with Food & Water</h3>
              <p>
                Take two capsules any time of day with food and at least 8oz of
                water.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <EleventhIcon2 />
            <div>
              <h3>When Combining Supplements</h3>
              <p>
                If taking with other supplements, remember to take them 30min
                apart or no more than 3 supplements at one time.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <EleventhIcon3 />
            <div>
              <h3>Take Daily</h3>
              <p>
                For better and more consistent results please take it daily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EleventhMainPart;
