//Lib
//Components
import React from "react";
//Styled
import styles from "./MyDiaryItem.module.less";
const MyDiaryItem = (props) => {
  const { time, label, content } = props;
  return (
    <div className={styles.component}>
      <div className={styles.time}>{time}</div>
      <div className={styles.label}>{label}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default MyDiaryItem;
