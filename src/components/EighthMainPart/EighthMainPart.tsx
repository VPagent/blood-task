import { FC } from "react";
import styles from "./EighthMainPart.module.scss";
import { ReactComponent as Icon1 } from "../../static/icons/8_1.svg";
import { ReactComponent as Icon2 } from "../../static/icons/8_2.svg";
import { ReactComponent as Icon3 } from "../../static/icons/8_3.svg";
import { ReactComponent as Icon4 } from "../../static/icons/8_4.svg";
import OrangeButton from "../OrangeButton/OrangeButton";

const EighthMainPart: FC = () => {
  return (
    <div>
      <h2 className={styles.sectionTitle}>Subscribe & Save</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Icon1 />
          <h3 className={styles.listItemTitle}>Save</h3>
          <p className={styles.listItemText}>
            Save HUGE on Nitric Oxide Flow every mouth
          </p>
        </div>
        <div className={styles.listItem}>
          <Icon2 />
          <h3 className={styles.listItemTitle}>Free Gifts</h3>
          <p className={styles.listItemText}>
            Exclusive and free surprise gifts
          </p>
        </div>
        <div className={styles.listItem}>
          <Icon3 />
          <h3 className={styles.listItemTitle}>On Your Schedule</h3>
          <p className={styles.listItemText}>Modify, pause, cancel any time</p>
        </div>
        <div className={styles.listItem}>
          <Icon4 />
          <h3 className={styles.listItemTitle}>Nitric Oxide Flow For Life</h3>
          <p className={styles.listItemText}>Protected from TikTok sell-outs</p>
        </div>
      </div>
      <OrangeButton onClick={() => {}}>TRY IT NOW - RISK FREE</OrangeButton>
    </div>
  );
};

export default EighthMainPart;
