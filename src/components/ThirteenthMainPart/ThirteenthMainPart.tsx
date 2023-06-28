import { FC, SyntheticEvent, useState } from "react";
import styles from "./ThirteenthMainPart.module.scss";
import thirteenthImg1 from "../../static/png/13_1.png";
import thirteenthImg2 from "../../static/png/13_2.png";
import thirteenthImg3 from "../../static/png/13_3.png";
import thirteenthImg4 from "../../static/png/13_4.png";
import { useMediaQuery } from "react-responsive";

const ThirteenthMainPart: FC = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const handleChangeCard = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === "increment") {
      if (currentCard === 4) {
        setCurrentCard(1);

        return;
      }
      setCurrentCard(currentCard + 1);
    } else {
      if (currentCard === 1) {
        setCurrentCard(4);

        return;
      }
      setCurrentCard(currentCard - 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2>Customer Reviews</h2>
      {!isDesktop && (
        <div className={styles.fakeSlider}>
          {currentCard === 1 && (
            <div className={styles.card}>
              <img
                className={styles.image}
                src={thirteenthImg1}
                alt="thirteenthImg1"
              />
              <div className={styles.cardBottom}>
                <p>—Gennaro P.</p>
                score
                <h3>Excellent product</h3>
                <p>
                  "I have noticed a positive difference in my blood pressure and
                  health since I began using this supplement." 
                </p>
              </div>
            </div>
          )}
          {currentCard === 2 && (
            <div className={styles.card}>
              <img
                className={styles.image}
                src={thirteenthImg2}
                alt="thirteenthImg2"
              />
              <div className={styles.cardBottom}>
                <p>—Ronald D.</p>
                score
                <h3>Great Product</h3>
                <p>
                  "Blood pressure was 142/86 before taking Nitric Oxide Flow and
                  after 3 bottles my BP was 118/74. I am going to use it until
                  next wellness dr visit and will let you know what BP is then.
                  I expect it to be even better"
                </p>
              </div>
            </div>
          )}
          {currentCard === 3 && (
            <div className={styles.card}>
              <img
                className={styles.image}
                src={thirteenthImg3}
                alt="thirteenthImg3"
              />
              <div className={styles.cardBottom}>
                <p>—Charles V.</p>
                score
                <h3>Amazing</h3>
                <p>
                  "Great. It does what you said it does in the ad. My pressure
                  is normal I only use on medication now instead of 3. Great
                  products"
                </p>
              </div>
            </div>
          )}
          {currentCard === 4 && (
            <div className={styles.card}>
              <img
                className={styles.image}
                src={thirteenthImg4}
                alt="thirteenthImg4"
              />
              <div className={styles.cardBottom}>
                <p>–Steve I.</p>
                score
                <h3>UNBELIEVABLE</h3>
                <p>
                  "This all natural product is the bomb.It will definitely put
                  your blood pressure back in the healthy range, with no side
                  effects. your Doctor will be amassed and start to wean you off
                  prescription meds. Thank you so much."
                </p>
              </div>
            </div>
          )}
          <div>
            {currentCard}
            <button onClick={handleChangeCard} name="decrement">
              -
            </button>
            <button onClick={handleChangeCard} name="increment">
              +
            </button>
          </div>
        </div>
      )}
      {isDesktop && (
        <div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={thirteenthImg1}
              alt="thirteenthImg1"
            />
            <div>
              <p>—Gennaro P.</p>
              score
              <h3>Excellent product</h3>
              <p>
                "I have noticed a positive difference in my blood pressure and
                health since I began using this supplement." 
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={thirteenthImg2}
              alt="thirteenthImg2"
            />
            <div>
              <p>—Ronald D.</p>
              score
              <h3>Great Product</h3>
              <p>
                "Blood pressure was 142/86 before taking Nitric Oxide Flow and
                after 3 bottles my BP was 118/74. I am going to use it until
                next wellness dr visit and will let you know what BP is then. I
                expect it to be even better"
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={thirteenthImg3}
              alt="thirteenthImg3"
            />
            <div>
              <p>—Charles V.</p>
              score
              <h3>Amazing</h3>
              <p>
                "Great. It does what you said it does in the ad. My pressure is
                normal I only use on medication now instead of 3. Great
                products"
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={thirteenthImg4}
              alt="thirteenthImg4"
            />
            <div>
              <p>–Steve I.</p>
              score
              <h3>UNBELIEVABLE</h3>
              <p>
                "This all natural product is the bomb.It will definitely put
                your blood pressure back in the healthy range, with no side
                effects. your Doctor will be amassed and start to wean you off
                prescription meds. Thank you so much."
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirteenthMainPart;
