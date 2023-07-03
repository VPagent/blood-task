import { FC } from "react";
import styles from "./RewardsPanel.module.scss";
import firstR from "../../static/png/1_1.png";
import secondR from "../../static/png/1_2.png";
import thirdR from "../../static/png/1_3.png";
import fourthR from "../../static/png/1_4.png";
import cn from "clsx";

type Props = {
  className?: string;
};

const RewardsPanel: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.rewardsBox, className)}>
      <div className={styles.rewardsBox_item}>
        <img className={styles.image} src={firstR} alt="" />
      </div>
      <div className={styles.rewardsBox_item}>
        <img className={styles.image} src={secondR} alt="" />
      </div>
      <div className={styles.rewardsBox_item}>
        <img className={styles.image} src={thirdR} alt="" />
      </div>
      <div className={styles.rewardsBox_item}>
        <img className={styles.image} src={fourthR} alt="" />
      </div>
    </div>
  );
};

export default RewardsPanel;
