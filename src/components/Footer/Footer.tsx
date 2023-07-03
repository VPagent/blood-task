import { FC } from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <p>
          †Disclaimer: These statements have not been evaluated by the Food and
          Drug Administration. These products are not intended to diagnose,
          treat, cure or prevent any disease. Product results may vary from
          person to person.
        </p>
        <p>
          Information provided on this site is solely for informational purposes
          only. It is not a substitute for professional medical advice. Do not
          use this information for diagnosing or treating a health problem or
          disease, or prescribing of any medications or supplements. Only your
          healthcare provider should diagnose your healthcare problems and
          prescribe treatment. None of our statements or information, including
          health claims, articles, advertising or product information have been
          evaluated or approved by the United States Food and Drug
          Administration (FDA). The products or ingredients referred to on this
          site are not intended to diagnose, treat, cure or prevent any disease.
          Please consult your healthcare provider before starting any
          supplement, diet or exercise program, before taking any medications or
          receiving treatment, particularly if you are currently under medical
          care. Make sure you carefully read all product labeling and packaging
          prior to use. If you have or suspect you may have a health problem, do
          not take any supplements without first consulting and obtaining the
          approval of your healthcare provider.
        </p>
        <p>© 2021 Copyright. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
