import { FC, SyntheticEvent, useState } from "react";
import styles from "./FirstMainPart.module.scss";
import Container from "../Container/Container";
import good1 from "../../static/png/23.png";
import good2 from "../../static/png/1_1_2.png";
import good3 from "../../static/png/1_1_3.png";
import good4 from "../../static/png/1_1_4.png";
import good5 from "../../static/png/1_1_5.png";
import good6 from "../../static/png/1_1_1.png";
import RewardsPanel from "../RewardsPanel";

const FirstMainPart: FC = () => {
  const [currentImg, setCurrentImg] = useState(good1);

  const handleChangeImg = (event: SyntheticEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.name) {
      case "good1":
        setCurrentImg(good1);
        return;
      case "good2":
        setCurrentImg(good2);
        return;
      case "good3":
        setCurrentImg(good3);
        return;
      case "good4":
        setCurrentImg(good4);
        return;
      case "good5":
        setCurrentImg(good5);
        return;
      case "good6":
        setCurrentImg(good6);
        return;
      default:
        return console.log("error in switch");
    }
  };

  return (
    <div>
      <h1 className={styles.mainTitle}>
        Support Your Blood Pressure With
        <span className={styles.greenText}>Nitric Oxide Flow</span>
      </h1>
      <RewardsPanel className={styles.rewardsPanel} />

      <div className={styles.fakeSlider}>
        <img className={styles.mainImg} src={currentImg} alt="" />
        <div className={styles.fakeSliderControls}>
          <button className={styles.btn} name="good1" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good1} alt="" />
          </button>
          <button className={styles.btn} name="good2" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good2} alt="" />
          </button>
          <button className={styles.btn} name="good3" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good3} alt="" />
          </button>
          <button className={styles.btn} name="good4" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good4} alt="" />
          </button>
          <button className={styles.btn} name="good5" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good5} alt="" />
          </button>
          <button className={styles.btn} name="good6" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good6} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstMainPart;
