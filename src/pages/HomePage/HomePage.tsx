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

      <Footer />
    </>
  );
};

export default HomePage;
