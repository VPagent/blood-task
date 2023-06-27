import { FC } from "react";
import styles from "./SeventhMainPart.module.scss";
import { ReactComponent as LegsIcon } from "../../static/icons/legs.svg";
import { ReactComponent as VeinsBig } from "../../static/icons/veinsBig.svg";
import { ReactComponent as BloodPress } from "../../static/icons/blood-pressure.svg";
import { ReactComponent as Cloud } from "../../static/icons/cloud.svg";

const SeventhMainPart: FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Nitric Oxide Benefits</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <LegsIcon />
          <p className={styles.listItemText}>Restores Blood Vessels*</p>
        </div>
        <div className={styles.listItem}>
          <VeinsBig />
          <p className={styles.listItemText}>Restores Circulation*</p>
        </div>
        <div className={styles.listItem}>
          <BloodPress />
          <p className={styles.listItemText}>Support Blood Pressure*</p>
        </div>
        <div className={styles.listItem}>
          <Cloud />
          <p className={styles.listItemText}>Boosts Oxygen Levels*</p>
        </div>
      </div>
    </div>
  );
};

export default SeventhMainPart;
