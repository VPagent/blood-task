import { FC } from "react";
import styles from "./ReviewsMainPart.module.scss";
import firstImg from "../../static/png/reviews_1.png";
// import secondImg from "../../static/png/reviews_2.png";
// import thirdImg from "../../static/png/reviews_3.png";
// import fourthImg from "../../static/png/reviews_4.png";
// import fifthImg from "../../static/png/reviews_5.png";
import RangePanel from "../RangePanel/RangePanel";
import { ReactComponent as StarIcon } from "../../static/icons/star.svg";
import { imageData, usersData } from "./data";
import { useMediaQuery } from "react-responsive";

const ReviewsMainPart: FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div>
      <h2>Reviews</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div>
            <img className={styles.firstImg} src={firstImg} alt="first" />
            <div>
              <p>
                4.9 <StarIcon className={styles.starIcon} />
              </p>
            </div>
          </div>
          <div className={styles.countBox}>
            <div>
              <p>5</p>
              <RangePanel allNum={10} currNum={8} />
            </div>
            <div>
              <p>4</p>
              <RangePanel allNum={10} currNum={4} />
              <div>
                <p>3</p>
                <RangePanel allNum={10} currNum={2} />
              </div>
              <div>
                <p>2</p>
                <RangePanel allNum={10} currNum={0} />
              </div>
              <div>
                <p>1</p>
                <RangePanel allNum={10} currNum={1} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <p>4 Customer Videos</p>
            <div className={styles.videoBox}>
              <iframe
                className={styles.iframeVideo}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className={styles.iframeVideo}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className={styles.iframeVideo}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className={styles.iframeVideo}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <p>4 Customer Images</p>
            <div className={styles.imageList}>
              {imageData &&
                imageData.map((src: any) => (
                  <img className={styles.userImage} src={src} alt="userImage" />
                ))}
            </div>
          </div>
        </div>
        {usersData &&
          usersData.map((userInfo) => (
            <div className={styles.listItem}>
              <div>
                <div>
                  <p>{userInfo.name}</p>
                  <p className={styles.verification}>{userInfo.verification}</p>
                </div>
                <p>{userInfo.date}</p>
                <p>{userInfo.score}</p>
              </div>
              <div>
                <p>{userInfo.text}</p>
                <img src={userInfo.photoSrc} alt={userInfo.name} />
              </div>
            </div>
          ))}
      </div>
      {!isDesktop && (
        <div>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      )}
    </div>
  );
};

export default ReviewsMainPart;
