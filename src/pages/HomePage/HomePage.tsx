import { FC } from "react";
import styles from "./HomePage.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FirstMainPart from "../../components/FirstMainPart";
import SecondMainPart from "../../components/SecondMainPart";
import Container from "../../components/Container";
import ThirdMainPart from "../../components/ThirdMainPart";
import FourthMainPart from "../../components/FourthMainPart";
import FifthMainPart from "../../components/FifthMainPart";
import SixthMainPart from "../../components/SixthMainPart";
import SeventhMainPart from "../../components/SeventhMainPart/SeventhMainPart";
import EighthMainPart from "../../components/EighthMainPart/EighthMainPart";
import NinthMainPart from "../../components/NinthMainPart/NinthMainPart";
import TenthMainPart from "../../components/TenthMainPart/TenthMainPart";
import EleventhMainPart from "../../components/EleventhMainPart/EleventhMainPart";
import TwelfthMainPart from "../../components/TwelfthMainPart/TwelfthMainPart";
import ThirteenthMainPart from "../../components/ThirteenthMainPart/ThirteenthMainPart";
import FourteenthMainPart from "../../components/FourteenthMainPart/FourteenthMainPart";
import FifteenthMainPart from "../../components/FifteenthMainPart/FifteenthMainPart";
import CustomerFaqMainPart from "../../components/CustomerFaqMainPart/CustomerFaqMainPart";
import ReviewsMainPart from "../../components/ReviewsMainPart/ReviewsMainPart";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <FirstMainPart />
          <SecondMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <ThirdMainPart />
        </Container>
      </section>
      <section className={styles.blueSection}>
        <Container>
          <FourthMainPart />
          <FifthMainPart />
        </Container>
      </section>
      <section className={styles.fourthSection}>
        <Container>
          <SixthMainPart />
        </Container>
      </section>
      <section className={styles.fifthSection}>
        <Container>
          <SeventhMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <EighthMainPart />
        </Container>
      </section>
      <section className={styles.blueSection}>
        <Container>
          <NinthMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <TenthMainPart />
        </Container>
      </section>
      <section className={styles.blueSection}>
        <Container>
          <EleventhMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <TwelfthMainPart />
        </Container>
      </section>
      <section className={styles.backgroundSection}>
        <Container>
          <ThirteenthMainPart />
        </Container>
      </section>
      <section className={styles.blueSection}>
        <Container>
          <FourteenthMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <FifteenthMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <CustomerFaqMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <ReviewsMainPart />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
