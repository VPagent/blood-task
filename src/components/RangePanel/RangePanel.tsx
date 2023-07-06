import { FC } from "react";
import styles from "./RangePanel.module.scss";
import cn from "clsx";

type Props = {
  allNum: number;
  currNum?: number;
  className?: string;
};

const RangePanel: FC<Props> = ({ allNum, currNum, className }) => {
  // const currWidth =
  return (
    <div className={cn(styles.allRange, className)}>
      <div
        className={styles.currRange}
        style={{ width: `calc(100% / ${allNum} * ${currNum})` }}
      ></div>
    </div>
  );
};

export default RangePanel;
