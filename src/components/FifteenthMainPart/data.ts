import firstImg from "../../static/png/15_1.png";
import secondImg from "../../static/png/15_2.png";
import thirdImg from "../../static/png/15_3.png";

export const goodsData = [
  {
    reviews: 2593,
    daySupply: 60,
    bottles: 2,
    oldPrice: 69.9,
    newPrice: 48.95,
    variant: "middle",
    specialTitle: "Most Popular",
    specialText: "Buy 2 Get 30% Off",
    subscribe: 20,
    purchase: 59.95,
    img: firstImg,
  },
  {
    reviews: 2593,
    daySupply: 90,
    bottles: 3,
    oldPrice: 104.85,
    newPrice: 63.95,
    variant: "high",
    specialTitle: "Best Value",
    specialText: "Buy 3 Get 39% Off",
    subscribe: 40,
    purchase: 74.95,
    img: secondImg,
  },
  {
    reviews: 2593,
    daySupply: 30,
    bottles: 1,
    oldPrice: null,
    newPrice: 29.95,
    variant: "low",
    specialTitle: null,
    specialText: null,
    subscribe: 5,
    purchase: 34.95,
    img: thirdImg,
  },
];
