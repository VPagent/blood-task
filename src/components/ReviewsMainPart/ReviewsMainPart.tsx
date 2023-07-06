import { FC } from "react";
import styles from "./ReviewsMainPart.module.scss";
import firstImg from "../../static/png/reviews_1.png";
import RangePanel from "../RangePanel/RangePanel";
import { ReactComponent as StarIcon } from "../../static/icons/star.svg";
import { imageData, usersData } from "./data";
import { useMediaQuery } from "react-responsive";
import { useMediaReq } from "../../helpers/response";
import ScorePanel from "../ScorePanel/ScorePanel";
import PaginationBox from "../PaginationBox/PaginationBox";

const ReviewsMainPart: FC = () => {
  const { isDesktop } = useMediaReq();

  return (
    <div>
      <h2 className={styles.sectionTitle}>Reviews</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div className={styles.imageBox}>
            <img className={styles.firstImg} src={firstImg} alt="first" />
            <div className={styles.scoreBox}>
              <p className={styles.scoreNum}>4.9</p>
              <StarIcon className={styles.starIcon} />
            </div>
          </div>
          <div className={styles.countBox}>
            <div className={styles.rangeBox}>
              <p className={styles.rangeText}>5</p>
              <RangePanel className={styles.range} allNum={10} currNum={8} />
            </div>
            <div className={styles.rangeBox}>
              <p className={styles.rangeText}>4</p>
              <RangePanel className={styles.range} allNum={10} currNum={4} />
            </div>
            <div className={styles.rangeBox}>
              <p className={styles.rangeText}>3</p>
              <RangePanel className={styles.range} allNum={10} currNum={2} />
            </div>
            <div className={styles.rangeBox}>
              <p className={styles.rangeText}>2</p>
              <RangePanel className={styles.range} allNum={10} currNum={0} />
            </div>
            <div className={styles.rangeBox}>
              <p className={styles.rangeText}>1</p>
              <RangePanel className={styles.range} allNum={10} currNum={1} />
            </div>
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <p className={styles.listItemTitle}>4 Customer Videos</p>
            <div className={styles.videoBox}>
              <iframe
                className={styles.iframeVideo}
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className={styles.iframeVideo}
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className={styles.iframeVideo}
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className={styles.iframeVideo}
                src="https://www.youtube.com/embed/PJxxfilLnGI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <p className={styles.listItemTitle}>4 Customer Images</p>
            <div className={styles.imageList}>
              {imageData &&
                imageData.map((item: any) => (
                  <img
                    className={styles.userImage}
                    src={item.src}
                    alt="userImage"
                  />
                ))}
            </div>
          </div>
        </div>
        {usersData &&
          usersData.map((userInfo) => (
            <div className={styles.listItem}>
              <div className={styles.listItemHeader}>
                <div className={styles.userNameBox}>
                  <p className={styles.userNameText}>{userInfo.name}</p>
                  <p className={styles.verification}>{userInfo.verification}</p>
                </div>
                <p className={styles.userDate}>{userInfo.date}</p>
                <ScorePanel
                  className={styles.scorePanel}
                  iconClass={styles.scoreIcons}
                />
              </div>
              <div className={styles.listItemFooter}>
                <p className={styles.userInfoText}>{userInfo.text}</p>
                <img
                  className={styles.userCommentImage}
                  src={userInfo.photoSrc}
                  alt={userInfo.name}
                />
              </div>
            </div>
          ))}
      </div>
      {!isDesktop && (
        <PaginationBox currentNum={1} allNum={10} onChange={() => {}} />
      )}
    </div>
  );
};

export default ReviewsMainPart;
