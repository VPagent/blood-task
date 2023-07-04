import { FC } from "react";
import styles from "./FifthMainPart.module.scss";
import smallContentImage from "../../static/png/contentSmallGroup.png";
import { ReactComponent as Hard } from "../../static/icons/hard.svg";
import { ReactComponent as Veins } from "../../static/icons/veins.svg";
import { ReactComponent as Timer } from "../../static/icons/timer.svg";

const FifthMainPart: FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      <img className={styles.mainImage} src={smallContentImage} alt="" />
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div className={styles.listItemHeader}>
            <Hard />
            <h3 className={styles.itemTitle}>Blood Pressure Support</h3>
          </div>
          <p className={styles.listItemFooter}>
            Helps support blood pressure by increasing your overall nitric oxide
            levels and circulation.12†
          </p>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemHeader}>
            <Veins />
            <h3 className={styles.itemTitle}>Circulation Support</h3>
          </div>
          <p className={styles.listItemFooter}>
            Helps increases blood flow, and circulation throughout the body by
            helping you produce more nitric oxide levels in your
            bloodstream.13,14†
          </p>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemHeader}>
            <Timer />
            <h3 className={styles.itemTitle}>Fast Recovery</h3>
          </div>
          <p className={styles.listItemFooter}>
            Helps deliver powerful nutrients through better circulation and
            blood flow. This may also help increase energy and stamina.15†
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthMainPart;
