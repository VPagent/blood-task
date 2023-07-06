import { FC } from "react";
import styles from "./ScorePanel.module.scss";
import { ReactComponent as Star } from "../../static/icons/star.svg";
import cn from "clsx";

type Props = {
  className?: string;
  iconClass?: string;
};
const ScorePanel: FC<Props> = ({ className, iconClass }) => {
  return (
    <div className={cn(styles.box, className)}>
      <Star className={cn(styles.icon, iconClass)} />
      <Star className={cn(styles.icon, iconClass)} />
      <Star className={cn(styles.icon, iconClass)} />
      <Star className={cn(styles.icon, iconClass)} />
      <Star className={cn(styles.icon, iconClass)} />
    </div>
  );
};

export default ScorePanel;
