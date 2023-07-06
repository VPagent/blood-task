import { FC, useState } from "react";
import styles from "./FirstMainPart.module.scss";
import cn from "clsx";

import RewardsPanel from "../RewardsPanel";
import { dataImage } from "./data";

const FirstMainPart: FC = () => {
  const [currentImg, setCurrentImg] = useState(dataImage[0].src);

  const handleChangeImg = (src: any) => {
    setCurrentImg(src);
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
          {dataImage &&
            dataImage.map((item) => (
              <button
                className={styles.btn}
                name={item.name}
                onClick={() => handleChangeImg(item.src)}
              >
                <img
                  className={cn(
                    styles.goodImg,
                    currentImg === item.src && styles.activeImg
                  )}
                  src={item.src}
                  alt={item.name}
                />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FirstMainPart;
