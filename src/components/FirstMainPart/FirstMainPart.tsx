import { FC, SyntheticEvent, useState } from "react";
import styles from "./FirstMainPart.module.scss";
import Container from "../Container/Container";
import firstR from "../../static/png/image87.png";
import secondR from "../../static/png/image88.png";
import thirdR from "../../static/png/image89.png";
import fourthR from "../../static/png/image90.png";
import good1 from "../../static/png/23.png";
import good2 from "../../static/png/LiquidBeets2.png";
import good3 from "../../static/png/LiquidBeets3.png";
import good4 from "../../static/png/LiquidBeets4.png";
import good5 from "../../static/png/LiquidBeets5.png";
import good6 from "../../static/png/LiquidBeets6.png";

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
      <h1>
        Support Your Blood Pressure With
        <span className={styles.greenText}>Nitric Oxide Flow</span>
      </h1>
      <div className={styles.rewardsBox}>
        <div className={styles.rewardsBox_item}>
          <img src={fourthR} alt="" />
        </div>
        <div className={styles.rewardsBox_item}>
          <img src={thirdR} alt="" />
        </div>
        <div className={styles.rewardsBox_item}>
          <img src={secondR} alt="" />
        </div>
        <div className={styles.rewardsBox_item}>
          <img src={firstR} alt="" />
        </div>
      </div>

      <div className={styles.fakeSlider}>
        <img src={currentImg} alt="" />
        <div className={styles.fakeSliderControls}>
          <button name="good1" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good1} alt="" />
          </button>
          <button name="good2" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good2} alt="" />
          </button>
          <button name="good3" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good3} alt="" />
          </button>
          <button name="good4" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good4} alt="" />
          </button>
          <button name="good5" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good5} alt="" />
          </button>
          <button name="good6" onClick={handleChangeImg}>
            <img className={styles.goodImg} src={good6} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstMainPart;
