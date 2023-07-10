import { FC } from "react";
import styles from "./FifthMainPart.module.scss";
import smallContentImage from "../../static/png/contentSmallGroup.png";
import { ReactComponent as Hard } from "../../static/icons/hard.svg";
import { ReactComponent as Veins } from "../../static/icons/veins.svg";
import { ReactComponent as Timer } from "../../static/icons/timer.svg";
import cn from "clsx";
import { useMediaReq } from "../../helpers/response";

const FifthMainPart: FC = () => {
  const isDesktop = useMediaReq();

  return (
    <div className={styles.sectionWrapper}>
      <img className={styles.mainImage} src={smallContentImage} alt="" />
      <div className={styles.list}>
        <div className={cn(styles.listItem, styles.firstItem)}>
          <div className={styles.listItemHeader}>
            <Hard />
            <h3 className={styles.itemTitle}>Blood Pressure Support</h3>
            {isDesktop && (
              <div className={styles.cursor}>
                <span className={styles.longPart}></span>
                <span className={styles.smallCircle}></span>
              </div>
            )}
          </div>
          <p className={styles.listItemFooter}>
            Helps support blood pressure by increasing your overall nitric oxide
            levels and circulation.12†
          </p>
        </div>
        {isDesktop && (
          <div className={cn(styles.listItem, styles.thirdItem)}>
            <div className={styles.listItemHeader}>
              <Timer />
              <h3 className={styles.itemTitle}>Fast Recovery</h3>
              {isDesktop && (
                <div className={styles.cursor}>
                  <span className={styles.longPart}></span>
                  <span className={styles.smallCircle}></span>
                </div>
              )}
            </div>
            <p className={styles.listItemFooter}>
              Helps deliver powerful nutrients through better circulation and
              blood flow. This may also help increase energy and stamina.15†
            </p>
          </div>
        )}
        <div className={cn(styles.listItem, styles.secondItem)}>
          <div className={styles.listItemHeader}>
            <Veins />
            <h3 className={styles.itemTitle}>Circulation Support</h3>
            {isDesktop && (
              <div className={styles.cursor}>
                <span className={styles.longPart}></span>
                <span className={styles.smallCircle}></span>
              </div>
            )}
          </div>
          <p className={styles.listItemFooter}>
            Helps increases blood flow, and circulation throughout the body by
            helping you produce more nitric oxide levels in your
            bloodstream.13,14†
          </p>
        </div>
        {!isDesktop && (
          <div className={cn(styles.listItem, styles.thirdItem)}>
            <div className={styles.listItemHeader}>
              <Timer />
              <h3 className={styles.itemTitle}>Fast Recovery</h3>
            </div>
            <p className={styles.listItemFooter}>
              Helps deliver powerful nutrients through better circulation and
              blood flow. This may also help increase energy and stamina.15†
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FifthMainPart;
