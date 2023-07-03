import { FC } from "react";
import styles from "./CustomerFaqMainPart.module.scss";
import { faqData } from "./data";
import CustomerFaqCard from "../CustomerFaqCard/CustomerFaqCard";

const CustomerFaqMainPart: FC = () => {
  return (
    <div>
      <h2>Customer FAQ</h2>
      <div className={styles.list}>
        {faqData && faqData.map((item) => <CustomerFaqCard item={item} />)}
      </div>
    </div>
  );
};

export default CustomerFaqMainPart;
