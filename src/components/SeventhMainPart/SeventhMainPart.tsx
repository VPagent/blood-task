import { FC } from "react";
import styles from "./SeventhMainPart.module.scss";
import { ReactComponent as LegsIcon } from "../../static/icons/legs.svg";
import { ReactComponent as VeinsBig } from "../../static/icons/veinsBig.svg";
import { ReactComponent as BloodPress } from "../../static/icons/blood-pressure.svg";
import { ReactComponent as Cloud } from "../../static/icons/cloud.svg";
import { useMediaReq } from "../../helpers/response";

const SeventhMainPart: FC = () => {
  const isDesktop = useMediaReq();

  return (
    <div>
      <h2 className={styles.title}>Nitric Oxide Benefits</h2>
      {!isDesktop && (
        <div className={styles.mobileList}>
          <div className={styles.listItem}>
            <LegsIcon className={styles.icon} />
            <p className={styles.listItemText}>Restores Blood Vessels*</p>
          </div>

          <div className={styles.listItem}>
            <VeinsBig className={styles.icon} />
            <p className={styles.listItemText}>Restores Circulation*</p>
          </div>

          <div className={styles.listItem}>
            <BloodPress className={styles.icon} />
            <p className={styles.listItemText}>Support Blood Pressure*</p>
          </div>

          <div className={styles.listItem}>
            <Cloud className={styles.icon} />
            <p className={styles.listItemText}>Boosts Oxygen Levels*</p>
          </div>
        </div>
      )}
      {isDesktop && (
        <div className={styles.desktopList}>
          <div className={styles.firstDesktopPart}>
            <div className={styles.desktopListItem}>
              <Cloud className={styles.desktopIcon} />
              <p className={styles.desktopListItemText}>
                Boosts Oxygen Levels*
              </p>
              <div className={styles.cursor}></div>
            </div>
            <div className={styles.desktopListItem}>
              <div className={styles.cursor}></div>
              <VeinsBig className={styles.desktopIcon} />
              <p className={styles.desktopListItemText}>
                Restores Circulation*
              </p>
            </div>
          </div>
          <div className={styles.secondDesktopPart}>
            <div className={styles.desktopListItem}>
              <LegsIcon className={styles.desktopIcon} />
              <p className={styles.desktopListItemText}>
                Restores Blood Vessels*
              </p>
              <div className={styles.cursor}></div>
            </div>
            <div className={styles.desktopListItem}>
              <div className={styles.cursor}></div>
              <BloodPress className={styles.desktopIcon} />
              <p className={styles.desktopListItemText}>
                Support Blood Pressure*
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeventhMainPart;
