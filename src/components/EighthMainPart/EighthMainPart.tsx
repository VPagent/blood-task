import { FC } from "react";
import styles from "./EighthMainPart.module.scss";
import { ReactComponent as Icon1 } from "../../static/icons/8_1.svg";
import { ReactComponent as Icon2 } from "../../static/icons/8_2.svg";
import { ReactComponent as Icon3 } from "../../static/icons/8_3.svg";
import { ReactComponent as Icon4 } from "../../static/icons/8_4.svg";

const EighthMainPart: FC = () => {
  return (
    <div>
      <h2>Subscribe & Save</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Icon1 />
          <h3>Save</h3>
          <p>Save HUGE on Nitric Oxide Flow every mouth</p>
        </div>
        <div className={styles.listItem}>
          <Icon2 />
          <h3>Free Gifts</h3>
          <p>Exclusive and free surprise gifts</p>
        </div>
        <div className={styles.listItem}>
          <Icon3 />
          <h3>On Your Schedule</h3>
          <p>Modify, pause, cancel any time</p>
        </div>
        <div className={styles.listItem}>
          <Icon4 />
          <h3>Nitric Oxide Flow For Life</h3>
          <p>Protected from TikTok sell-outs</p>
        </div>
      </div>
      <button>TRY IT NOW - RISK FREE</button>
    </div>
  );
};

export default EighthMainPart;
