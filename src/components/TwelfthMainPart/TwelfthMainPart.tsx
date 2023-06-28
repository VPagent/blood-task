import { FC } from "react";
import styles from "./TwelfthMainPart.module.scss";
import twelfthImg1 from "../../static/png/12_1.png";

const TwelfthMainPart: FC = () => {
  return (
    <div>
      <h2>Back Up By Science</h2>
      <img src={twelfthImg1} alt="twelfthImg" />
      <p>
        According to Million Hearts, an organization under the CDC nearly 1 out
        of every 2 adults in the United States have hypertension (high blood
        pressure).
      </p>
      <p>
        Most adults with hypertension in the United States do not have their
        hypertension under control (92.1 million). Leaving them at risk for
        greater health problems like stroke, and heart disease.
      </p>
      <p>
        According to the CDC stroke and heart diseases are still the leading
        cause of death in United States according to research done in 2020 and
        2021.
      </p>
    </div>
  );
};

export default TwelfthMainPart;
