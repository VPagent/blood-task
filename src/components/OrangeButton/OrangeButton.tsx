import { FC, ReactNode } from "react";
import styles from "./OrangeButton.module.scss";
import cn from "clsx";

type Props = {
  children: string | ReactNode;
  onClick?: () => void;
  className?: string;
};

const OrangeButton: FC<Props> = ({ children, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={cn(styles.btn, className)}
      onClick={handleClick}
      type="button"
    >
      <p className={styles.btnText}>{children}</p>
    </button>
  );
};

export default OrangeButton;
