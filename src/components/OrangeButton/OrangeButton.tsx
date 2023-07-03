import { FC, ReactNode } from "react";
import styles from "./OrangeButton.module.scss";
import cn from "clsx";

type Props = {
  label: string | ReactNode;
  onClick: () => void;
  className?: string;
};

const OrangeButton: FC<Props> = ({ label, onClick, className }) => {
  return (
    <button
      className={cn(styles.btn, className)}
      onClick={() => onClick()}
      type="button"
    >
      {label}
    </button>
  );
};

export default OrangeButton;
