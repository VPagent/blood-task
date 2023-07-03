import { FC, useState } from "react";
import styles from "./CustomerFaqCard.module.scss";

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
    <div>
      <div>
        <p>{title}</p>
        <button className={styles.openCloseBtn} onClick={toggleOpenInfo}>
          close
        </button>
        <div className={styles.hidePart}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerFaqCard;
