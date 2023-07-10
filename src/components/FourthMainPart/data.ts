import { nanoid } from "nanoid";
import styles from "./FourthMainPart.module.scss";
import vegan from "../../static/png/vegan.png";
import glutenFree from "../../static/png/glutenfree.png";
import nonGmo from "../../static/png/nogmo.png";
import natural from "../../static/png/renewableenergy1.png";

export const firstTextData = [
  {
    id: nanoid(),
    text: "Supports Blood Pressure*",
  },
  {
    id: nanoid(),
    text: "Supports healthy heart*",
  },
  {
    id: nanoid(),
    text: "Improves blood flow*",
  },
  {
    id: nanoid(),
    text: " Reduces fatigue*",
  },
  {
    id: nanoid(),
    text: "Improves oxygen intake*",
  },
  {
    id: nanoid(),
    text: "Helps muscle recovery*",
  },
];

export const iconsData = [
  {
    id: nanoid(),
    icon: vegan,
    text: "vegan",
  },
  {
    id: nanoid(),
    icon: glutenFree,
    text: "gluten free",
  },
  {
    id: nanoid(),
    icon: nonGmo,
    text: "non gmo",
  },
  {
    id: nanoid(),
    icon: natural,
    text: "all natural",
  },
];
