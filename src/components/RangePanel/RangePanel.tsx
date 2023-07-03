import { FC } from "react";
import styles from "./RangePanel.module.scss";

type Props = {
  allNum: number;
  currNum?: number;
};

const RangePanel: FC<Props> = ({ allNum, currNum }) => {
  // const currWidth =
  return (
    <div className={styles.allRange}>
      <div
        className={styles.currRange}
        style={{ width: `calc(100% / ${allNum} * ${currNum})` }}
      ></div>
    </div>
  );
};

export default RangePanel;
