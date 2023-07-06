import { FC, useState } from "react";
import styles from "./CustomerFaqCard.module.scss";
import cn from "clsx";
import { ReactComponent as CloseIcon } from "../../static/icons/closePlus.svg";

type Props = {
  item: any;
};

const CustomerFaqCard: FC<Props> = ({ item }) => {
  const { title, text } = item;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.cardTitle}>{title}</p>
        <button
          className={cn(styles.openCloseBtn, isOpen && styles.btnIsOpen)}
          onClick={toggleOpenInfo}
        >
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <div className={cn(styles.hidePart, isOpen && styles.isOpen)}>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default CustomerFaqCard;
