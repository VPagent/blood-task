import { FC } from "react";
import styles from "./NinthMainPart.module.scss";
import { ReactComponent as NinthPartIcon1 } from "../../static/icons/9_1.svg";
import { ReactComponent as NinthPartIcon2 } from "../../static/icons/9_2.svg";
import { ReactComponent as NinthPartIcon3 } from "../../static/icons/9_3.svg";
import { ReactComponent as NinthPartIcon4 } from "../../static/icons/9_4.svg";
import { ReactComponent as NinthPartIcon5 } from "../../static/icons/9_5.svg";
import { ReactComponent as NinthPartIcon6 } from "../../static/icons/9_6.svg";
import { ReactComponent as NinthPartIcon7 } from "../../static/icons/9_7.svg";
import { ReactComponent as NinthPartIcon8 } from "../../static/icons/9_8.svg";
import NinthImg1 from "../../static/png/9_1.png";
import NinthImg2 from "../../static/png/9_2.png";

const NinthMainPart: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Poor Circulation?</h2>
      <p className={styles.sectionText}>
        Increase your circulation by boosting your Nitric Oxide production.
      </p>
      <div className={styles.imageBox}>
        <div className={styles.imagePart}>
          <p className={styles.imageTitle}>Unhealthy</p>
          <img className={styles.image} src={NinthImg1} alt="blood1" />
          <NinthPartIcon1 className={styles.icon} />
        </div>
        <div className={styles.imagePart}>
          <p className={styles.imageTitle}>Healthy</p>
          <img className={styles.image} src={NinthImg2} alt="blood1" />
          <NinthPartIcon2 className={styles.icon} />
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <NinthPartIcon3 />
          <p className={styles.listItemText}>Blood Circulation*</p>
        </div>
        <div className={styles.listItem}>
          <NinthPartIcon4 />
          <p className={styles.listItemText}>Blood Pressure Support*</p>
        </div>
        <div className={styles.listItem}>
          <NinthPartIcon5 />
          <p className={styles.listItemText}>Heart Healthy Energy*</p>
        </div>
        <div className={styles.listItem}>
          <NinthPartIcon6 />
          <p className={styles.listItemText}>Antioxidants*</p>
        </div>
        <div className={styles.listItem}>
          <NinthPartIcon7 />
          <p className={styles.listItemText}>Heart Health Support*</p>
        </div>
        <div className={styles.listItem}>
          <NinthPartIcon8 />
          <p className={styles.listItemText}>Nitric Oxide Production*</p>
        </div>
      </div>
    </div>
  );
};

export default NinthMainPart;
