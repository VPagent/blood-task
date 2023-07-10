import { FC, useState } from "react";
import styles from "./FirstMainPart.module.scss";
import cn from "clsx";
import { ReactComponent as Check } from "../../static/icons/checkmark1.svg";

import RewardsPanel from "../RewardsPanel";
import { dataImage, textData } from "./data";
import { useMediaReq } from "../../helpers/response";
import OrangeButton from "../OrangeButton/OrangeButton";

const FirstMainPart: FC = () => {
  const [currentImg, setCurrentImg] = useState(dataImage[0].src);

  const handleChangeImg = (src: any) => {
    setCurrentImg(src);
  };

  const isDesktop = useMediaReq();

  return (
    <div className={styles.sectionWrapper}>
      <h1 className={styles.mainTitle}>
        Support Your Blood Pressure With
        <span className={styles.greenText}>Nitric Oxide Flow</span>
      </h1>
      <div className={styles.desktopSectionsWrapper}>
        <div className={styles.rewardsSliderWrapper}>
          {!isDesktop && <RewardsPanel className={styles.rewardsPanel} />}

          <div className={styles.fakeSlider}>
            <div className={styles.desktopWrapper}>
              {isDesktop && <RewardsPanel className={styles.rewardsPanel} />}
              <img className={styles.mainImg} src={currentImg} alt="" />
            </div>
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
        {/* //second */}
        <div className={styles.wrapper}>
          <h2 className={styles.sectionTitle}>
            Helps restore blood flow and support normal blood pressure
          </h2>
          <div className={styles.list}>
            {textData &&
              textData.map(({ text, id }) => (
                <div key={id} className={styles.listItem}>
                  <Check className={styles.checkIcon} />
                  <p className={styles.listItemText}>{text}</p>
                </div>
              ))}
          </div>
          <div className={styles.btnWrapper}>
            <OrangeButton className={styles.bottomBtn}>
              Try It Now - Risk Free
            </OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstMainPart;
