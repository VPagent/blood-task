import { FC } from "react";
import styles from "./ScorePanel.module.scss";
import { ReactComponent as Star } from "../../static/icons/star.svg";
import cn from "clsx";

type Props = {
  className?: string;
};
const ScorePanel: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.box, className)}>
      <Star className={styles.icon} />
      <Star className={styles.icon} />
      <Star className={styles.icon} />
      <Star className={styles.icon} />
      <Star className={styles.icon} />
    </div>
  );
};

export default ScorePanel;
