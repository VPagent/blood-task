import { FC } from "react";
import styles from "./SixthMainPart.module.scss";
import blind from "../../static/png/Rectangle.png";
import firstImg from "../../static/png/6part1small.png";
import secondImg from "../../static/png/6part2Small.png";
import thirdImg from "../../static/png/6part3small.png";
// import { ReactComponent as Blind } from "../../static/icons/blind.svg";
import { ReactComponent as DoubleChevron } from "../../static/icons/doubleChevron.svg";

const SixthMainPart: FC = () => {
  return (
    <div>
      <h2>Why Is Heart Health So Important?</h2>
      <div className={styles.list}>
        <div className={styles.card}>
          <div className={styles.topPart}>
            <img className={styles.decorImg} src={blind} alt="" />
            <span className={styles.countNum}>1</span>
          </div>
          <img className={styles.contentImg} src={firstImg} alt="" />
          <div className={styles.cardFooter}>
            <h3 className={styles.cardTitle}>
              Helps Boosts Overall Circulation
            </h3>
            <p className={styles.cardText}>
              Higher nitrate intake helps improve overall circulation flow.
            </p>
          </div>
        </div>
        <DoubleChevron className={styles.chevronToBottom} />
        <div className={styles.card}>
          <div className={styles.topPart}>
            <img className={styles.decorImg} src={blind} alt="" />
            <span className={styles.countNum}>2</span>
          </div>
          <img className={styles.contentImg} src={secondImg} alt="" />
          <div className={styles.cardFooter}>
            <h3 className={styles.cardTitle}>
              Supports Normal Blood Pressure*
            </h3>
            <p className={styles.cardText}>
              Increasing your nitric oxide product can help support normal blood
              pressure.
            </p>
          </div>
        </div>
        <DoubleChevron className={styles.chevronToBottom} />
        <div className={styles.card}>
          <div className={styles.topPart}>
            <img className={styles.decorImg} src={blind} alt="" />
            <span className={styles.countNum}>3</span>
          </div>
          <img className={styles.contentImg} src={thirdImg} alt="" />
          <div className={styles.cardFooter}>
            <h3 className={styles.cardTitle}>
              Alleviates Strain Put On Heart Muscles*
            </h3>
            <p className={styles.cardText}>
              With better circulation your heart doesn't need to work as hard as
              it use too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthMainPart;
