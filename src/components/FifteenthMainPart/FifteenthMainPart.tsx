import { FC } from "react";
import styles from "./FifteenthMainPart.module.scss";
import { goodsData } from "../FifteenthMainPart/data";
import FifteenthPartCard from "../FifteenthPartCard/FifteenthPartCard";

const FifteenthMainPart: FC = () => {
  return (
    <div>
      <h2>Support Normal Blood Pressure With Nitric Oxide Flow</h2>
      <div className={styles.list}>
        {goodsData &&
          goodsData.map((item: any) => <FifteenthPartCard item={item} />)}
      </div>
    </div>
  );
};
export default FifteenthMainPart;
