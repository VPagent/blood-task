import { ChangeEvent, FC, useState } from "react";
import styles from "./FifteenthPartCard.module.scss";
import cn from "clsx";
import footerImg from "../../static/png/cardFooter.png";
import ScorePanel from "../ScorePanel/ScorePanel";
import OrangeButton from "../OrangeButton/OrangeButton";
import Radio from "../Radio/Radio";

type Props = {
  item: any;
};
const FifteenthPartCard: FC<Props> = ({ item }) => {
  const {
    reviews,
    daySupply,
    bottles,
    oldPrice,
    newPrice,
    variant,
    specialTitle,
    specialText,
    subscribe,
    purchase,
    img,
    month,
  } = item;

  const [checkIdentifier, setCheckIdentifier] = useState("Subscribe");

  const isHigh = variant === "high";
  const isMiddle = variant === "middle";
  const isLow = variant === "low";

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckIdentifier(e.currentTarget.value);
  };

  return (
    <div
      className={cn(
        styles.card,
        isHigh && styles.high,
        isLow && styles.low,
        isMiddle && styles.middle
      )}
    >
      {(isHigh || isMiddle) && (
        <div className={styles.specialDescriptionBox}>
          <h3 className={styles.specialTitle}>{specialTitle}</h3>
          <p className={styles.specialText}>{specialText}</p>
        </div>
      )}
      <div className={styles.smallWrapper}>
        <img className={styles.image} src={img} alt={specialTitle} />
        <div className={styles.cardMiddlePart}>
          <div className={styles.infoBox}>
            <div className={styles.smallInfoBox}>
              <ScorePanel className={styles.scorePanel} />
              <p className={styles.bottomText}>{bottles} Bottles</p>
            </div>
            <div className={styles.smallInfoBox}>
              <p>{reviews} Reviews</p>
              <p className={styles.bottomText}>{daySupply} Day supply</p>
            </div>
          </div>
          <div className={styles.priceBox}>
            {oldPrice && <p className={styles.oldPrice}>${oldPrice}</p>}
            <p className={styles.newPrice}>${newPrice}</p>
          </div>
        </div>
        <div className={styles.radioBox}>
          <div className={styles.radioWrapper}>
            <Radio
              className={styles.radio}
              name="description"
              value="Subscribe"
              label={
                <p className={styles.subscribeText}>
                  Subscribe and Save ${subscribe}
                </p>
              }
              checkIdentifier={checkIdentifier}
              onChange={handleChangeInput}
            />
            <span className={styles.receiveText}>
              Receive this bundle {month} months, cancel anytime
            </span>
          </div>
          <div className={styles.radioWrapper}>
            <Radio
              className={styles.radio}
              name="description"
              value="Purchase"
              label={
                <p className={styles.subscribeText}>
                  One time purchase for ${purchase}
                </p>
              }
              checkIdentifier={checkIdentifier}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <OrangeButton className={styles.orangeBtn}>
          Subscribe Now - Risk Free
        </OrangeButton>
        <div className={styles.cardFooter}>
          <p className={styles.bottomText}>GUARANTEED SAFE CHECKOUT</p>
          <img className={styles.footerImg} src={footerImg} alt="footerImg" />
        </div>
      </div>
    </div>
  );
};

export default FifteenthPartCard;
