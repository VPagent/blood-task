import { FC, SyntheticEvent } from "react";
import styles from "./PaginationBox.module.scss";
import { ReactComponent as ChevronLeft } from "../../static/icons/chevronLeft.svg";
import { ReactComponent as ChevronRight } from "../../static/icons/chevronRight.svg";
import cn from "clsx";

type Props = {
  currentNum: number;
  allNum: number;
  onChange: (num: number) => void;
  color?: string;
};

const PaginationBox: FC<Props> = ({ currentNum, allNum, onChange, color }) => {
  const handleChangeCard = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === "increment") {
      onChange(currentNum + 1);
    } else {
      onChange(currentNum - 1);
    }
  };

  const isWhite = color === "white";

  return (
    <div className={styles.paginationBox}>
      <button
        className={styles.paginationBtn}
        onClick={handleChangeCard}
        name="decrement"
        disabled={currentNum === 1}
      >
        <ChevronLeft
          className={cn(styles.paginationIcon, isWhite && styles.whiteIcon)}
        />
      </button>
      <p className={cn(styles.paginationNum, isWhite && styles.whiteText)}>
        {currentNum}/4
      </p>
      <button
        className={styles.paginationBtn}
        onClick={handleChangeCard}
        name="increment"
        disabled={currentNum === allNum}
      >
        <ChevronRight
          className={cn(styles.paginationIcon, isWhite && styles.whiteIcon)}
        />
      </button>
    </div>
  );
};

export default PaginationBox;
