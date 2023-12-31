import { FC, SyntheticEvent, useState } from "react";
import styles from "./TenthMainPart.module.scss";
// import cn from "clsx";
import { useMediaQuery } from "react-responsive";
import tenthImg1 from "../../static/png/10_1.png";
import tenthImg2 from "../../static/png/10_2.png";
import tenthImg3 from "../../static/png/10_3.png";
import tenthImg4 from "../../static/png/10_4.png";
import PaginationBox from "../PaginationBox/PaginationBox";

const TenthMainPart: FC = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  // const handleChangeCard = (event: SyntheticEvent<HTMLButtonElement>) => {
  //   if (event.currentTarget.name === "increment") {
  //     setCurrentCard(currentCard + 1);
  //   } else {
  //     setCurrentCard(currentCard - 1);
  //   }
  // };

  return (
    <div>
      <h2 className={styles.sectionTitle}>Ingredients That Bring Results</h2>
      {!isDesktop && (
        <>
          <div className={styles.list}>
            {currentCard === 1 && (
              <div className={styles.mobileCard}>
                <img className={styles.image} src={tenthImg1} alt="tenthImg1" />
                <h3 className={styles.cardTitle}>L-Arginine</h3>
                <p className={styles.cardDescription}>
                  {!isDesktop ? "(250mg)" : "250mg"}
                </p>
                <p className={styles.cardText}>
                  A natural amino acid that helps dilate blood vessels and
                  increase circulation.
                </p>
              </div>
            )}
            {currentCard === 2 && (
              <div className={styles.mobileCard}>
                <img className={styles.image} src={tenthImg2} alt="tenthImg2" />

                <h3 className={styles.cardTitle}>L-Arginine Alpha</h3>
                <p className={styles.cardDescription}>
                  {!isDesktop ? "(500mg)" : "500mg"}
                </p>
                <p className={styles.cardText}>
                  Found in bean sprouts. Coverts into nitric oxide inside the
                  body and helps dilate blood vessels.
                </p>
              </div>
            )}
            {currentCard === 3 && (
              <div className={styles.mobileCard}>
                <img className={styles.image} src={tenthImg3} alt="tenthImg3" />

                <h3 className={styles.cardTitle}>L-Citrulline Malate</h3>
                <p className={styles.cardDescription}>
                  {!isDesktop ? "(250mg)" : "250mg"}
                </p>
                <p className={styles.cardText}>
                  An amino acid found in squash. Helps prolong nitric oxide
                  production and vasodilation.
                </p>
              </div>
            )}
            {currentCard === 4 && (
              <div className={styles.mobileCard}>
                <img className={styles.image} src={tenthImg4} alt="tenthImg4" />

                <h3 className={styles.cardTitle}>L-Citrulline</h3>
                <p className={styles.cardDescription}>
                  {!isDesktop ? "(250mg)" : "250mg"}
                </p>
                <p className={styles.cardText}>
                  (250mg) Helps support moderate blood flow during exercise.
                  L-Citrulline may also help stimulate nitric oxide synthesis.
                </p>
              </div>
            )}
          </div>
          <PaginationBox
            currentNum={currentCard}
            allNum={4}
            onChange={setCurrentCard}
          />
        </>
      )}
      {isDesktop && (
        <div>
          <div className={styles.desktopCard}>
            <h3>L-Arginine</h3>
            <p>{!isDesktop ? "(250mg)" : "250mg"}</p>
            <p>
              A natural amino acid that helps dilate blood vessels and increase
              circulation.
            </p>
          </div>
          <div className={styles.desktopCard}>
            <h3>L-Arginine Alpha</h3>
            <p>{!isDesktop ? "(500mg)" : "500mg"}</p>
            <p>
              Found in bean sprouts. Coverts into nitric oxide inside the body
              and helps dilate blood vessels.
            </p>
          </div>
          <div className={styles.desktopCard}>
            <h3>L-Citrulline Malate</h3>
            <p>{!isDesktop ? "(250mg)" : "250mg"}</p>
            <p>
              An amino acid found in squash. Helps prolong nitric oxide
              production and vasodilation.
            </p>
          </div>
          <div className={styles.desktopCard}>
            <h3>L-Citrulline</h3>
            <p>{!isDesktop ? "(250mg)" : "250mg"}</p>
            <p>
              (250mg) Helps support moderate blood flow during exercise.
              L-Citrulline may also help stimulate nitric oxide synthesis.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenthMainPart;
