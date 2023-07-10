import styles from "./Logo.module.scss";
import { ReactComponent as LogoIcon } from "../../static/icons/LOGO7.svg";

import { FC } from "react";

const Logo: FC = () => {
  return <LogoIcon className={styles.logoIcon} />;
};

export default Logo;
