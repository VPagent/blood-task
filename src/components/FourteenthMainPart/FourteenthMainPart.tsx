import { FC } from "react";
import styles from "./FourteenthMainPart.module.scss";
import fourteenthImg1 from "../../static/png/14_1.png";
import fourteenthImg2 from "../../static/png/14_2.png";

const FourteenthMainPart: FC = () => {
  return (
    <div>
      <h2>We Are Confident You'll Love it Or Your Money Back!</h2>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={fourteenthImg1} alt="fourteenthImg1" />
        <img
          className={styles.img2}
          src={fourteenthImg2}
          alt="fourteenthImg2"
        />
      </div>
    </div>
  );
};

export default FourteenthMainPart;
