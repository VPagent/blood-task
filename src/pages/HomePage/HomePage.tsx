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
import cn from "clsx";

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
      <section className={styles.sectionWithPt80}>
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
      <section className={styles.sectionWithPt80}>
        <Container>
          <SixthMainPart />
        </Container>
      </section>
      <section className={styles.fifthSection}>
        <Container>
          <SeventhMainPart />
        </Container>
      </section>
      <section className={styles.sectionWithPt80}>
        <Container>
          <EighthMainPart />
        </Container>
      </section>
      <section className={styles.blueSection}>
        <Container>
          <NinthMainPart />
        </Container>
      </section>
      <section className={styles.sectionWithPt80}>
        <Container>
          <TenthMainPart />
        </Container>
      </section>
      <section className={styles.blueSection}>
        <Container>
          <EleventhMainPart />
        </Container>
      </section>
      <section className={styles.sectionWithPt80}>
        <Container>
          <TwelfthMainPart />
        </Container>
      </section>
      <section className={styles.backgroundSection}>
        <Container>
          <ThirteenthMainPart />
        </Container>
      </section>

      <section className={cn(styles.blueSection, styles.withMargin)}>
        <Container>
          <FourteenthMainPart />
        </Container>
      </section>
      <section className={styles.sectionWithPt80}>
        <Container>
          <FifteenthMainPart />
        </Container>
      </section>
      <section>
        <Container>
          <CustomerFaqMainPart />
        </Container>
      </section>
      <section className={styles.sectionWithPt80}>
        <Container>
          <ReviewsMainPart />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
