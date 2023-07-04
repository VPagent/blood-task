import { FC } from "react";
import styles from "./SecondMainPart.module.scss";
import { ReactComponent as Check } from "../../static/icons/checkmark1.svg";
import OrangeButton from "../OrangeButton/OrangeButton";

const SecondMainPart: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>
        Helps restore blood flow and support normal blood pressure
      </h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Check className={styles.checkIcon} />
          <p className={styles.listItemText}>
            Helps support normal blood pressure by increasing your nitric oxide
            production.
          </p>
        </div>
        <div className={styles.listItem}>
          <Check className={styles.checkIcon} />
          <p className={styles.listItemText}>
            Helps increase your overall heart healthy energy without a crash by
            supplying your body with more nitrates.
          </p>
        </div>
        <div className={styles.listItem}>
          <Check className={styles.checkIcon} />
          <p className={styles.listItemText}>
            Helps improve overall physical performance and muscle recovery.
          </p>
        </div>
        <div className={styles.listItem}>
          <Check className={styles.checkIcon} />
          <p className={styles.listItemText}>
            Helps support your cardiovascular system and boost your immune
            function.
          </p>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <OrangeButton onClick={() => {}}>Try It Now - Risk Free</OrangeButton>
      </div>
    </div>
  );
};

export default SecondMainPart;
