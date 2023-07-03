import { FC } from "react";
import styles from "./FifteenthPartCard.module.scss";
import cn from "clsx";
import footerImg from "../../static/png/cardFooter.png";

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
  } = item;

  const isHigh = variant === "high";
  const isMiddle = variant === "middle";
  const isLow = variant === "low";

  return (
    <div className={styles.cardWrapper}>
      <div
        className={cn(
          styles.card,
          isHigh && styles.high,
          isLow && styles.low,
          isMiddle && styles.middle
        )}
      >
        {isHigh ||
          (isMiddle && (
            <div>
              <h3>{specialTitle}</h3>
              <p>{specialText}</p>
            </div>
          ))}
        <img src={img} alt={specialTitle} />
        <div className={styles.cardMiddlePart}>
          <div>
            <div className={styles.smallInfoBox}>
              score
              <p>{bottles}</p>
            </div>
            <div className={styles.smallInfoBox}>
              <p>{reviews}</p>
              <p>{daySupply}</p>
            </div>
          </div>
          <div>
            {oldPrice && <p className={styles.oldPrice}>{oldPrice}</p>}
            <p className={styles.newPrice}>{newPrice}</p>
          </div>
        </div>
        <div className={styles.radioBox}></div>
        <button>Subscribe Now - Risk Free</button>
        <div className={styles.cardFooter}>
          <p>GUARANTEED SAFE CHECKOUT</p>
          <img className={styles.footerImg} src={footerImg} alt="footerImg" />
        </div>
      </div>
    </div>
  );
};

export default FifteenthPartCard;
