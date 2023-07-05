import { FC, ReactNode } from "react";
import styles from "./Radio.module.scss";
import cn from "clsx";

type Props = {
  name: string;
  value: string;
  className: string;
  label?: string | ReactNode;
  checkIdentifier: string;
  onChange: any;
};

const Radio: FC<Props> = ({
  name,
  value,
  className,
  label,
  checkIdentifier,
  onChange,
}) => {
  const isChecked = checkIdentifier === value;
  return (
    <label className={cn(styles.label, className)}>
      <span className={cn(styles.bigCircle, isChecked && styles.checked)}>
        <span
          className={cn(styles.smallCircle, isChecked && styles.checked)}
        ></span>
      </span>

      <input
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      {label}
    </label>
  );
};

export default Radio;
