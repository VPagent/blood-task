import { FC, ReactNode } from "react";
import styles from "./OrangeButton.module.scss";
import cn from "clsx";

type Props = {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
};

const OrangeButton: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={cn(styles.btn, className)}
      onClick={() => onClick()}
      type="button"
    >
      <p className={styles.btnText}>{children}</p>
    </button>
  );
};

export default OrangeButton;
