import { FC } from "react";
import { firstTextData, iconsData } from "./data";
import styles from "./FourthMainPart.module.scss";
import { useMediaReq } from "../../helpers/response";

const FourthMainPart: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>How Does Nitric Oxide Flow work?</h2>
      <div className={styles.list}>
        {firstTextData &&
          firstTextData.map(({ id, text }) => (
            <p className={styles.listItem} key={id}>
              <span className={styles.circle}></span>
              {text}
            </p>
          ))}
      </div>
      <div className={styles.circleList}>
        {iconsData &&
          iconsData.map((iconItem) => (
            <div key={iconItem.id} className={styles.circleListItem}>
              <div className={styles.iconCircle}>
                <img
                  className={styles.icon}
                  src={iconItem.icon}
                  alt={iconItem.text}
                />
              </div>
              <p className={styles.iconText}>{iconItem.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FourthMainPart;
