//Lib
//Components
import React from "react";
//Styled
import styles from "./RecommendVideoItem.module.less";

const RecommendVideoItem = (props) => {
  const { image, tag, date, title } = props;
  return (
    <div className={styles.component}>
      <div className={styles.image}>
        <img src={image} alt="image" />
        <div className={styles.date}>{date}</div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.tag}> {tag}</p>
      </div>
    </div>
  );
};

export default RecommendVideoItem;
