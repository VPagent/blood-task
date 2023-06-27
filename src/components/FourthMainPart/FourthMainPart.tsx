import { FC } from "react";
import styles from "./FourthMainPart.module.scss";
import vegan from "../../static/png/vegan.png";
import glutenFree from "../../static/png/glutenfree.png";
import nonGmo from "../../static/png/nogmo.png";
import natural from "../../static/png/renewableenergy1.png";

const FourthMainPart: FC = () => {
  return (
    <div>
      <h2>How Does Nitric Oxide Flow work?</h2>
      <div className={styles.list}>
        <p className={styles.listItem}>
          <span className={styles.circle}></span>
          Supports Blood Pressure*
        </p>
        <p className={styles.listItem}>
          <span className={styles.circle}></span>
          Supports healthy heart*
        </p>
        <p className={styles.listItem}>
          <span className={styles.circle}></span>
          Improves blood flow*
        </p>
        <p className={styles.listItem}>
          <span className={styles.circle}></span>
          Reduces fatigue*
        </p>
        <p className={styles.listItem}>
          <span className={styles.circle}></span>
          Improves oxygen intake*
        </p>
        <p className={styles.listItem}>
          <span className={styles.circle}></span>
          Helps muscle recovery*
        </p>
      </div>
      <div className={styles.circleList}>
        <div className={styles.circleListItem}>
          <div className={styles.iconCircle}>
            <img className={styles.icon} src={vegan} alt="vegan" />
          </div>
          <p>vegan</p>
        </div>
        <div className={styles.circleListItem}>
          <div className={styles.iconCircle}>
            <img className={styles.icon} src={glutenFree} alt="glutenFree" />
          </div>
          <p>gluten free</p>
        </div>
        <div className={styles.circleListItem}>
          <div className={styles.iconCircle}>
            <img className={styles.icon} src={nonGmo} alt="nonGmo" />
          </div>
          <p>non gmo</p>
        </div>
        <div className={styles.circleListItem}>
          <div className={styles.iconCircle}>
            <img className={styles.icon} src={natural} alt="natural" />
          </div>
          <p>all natural</p>
        </div>
      </div>
    </div>
  );
};

export default FourthMainPart;
