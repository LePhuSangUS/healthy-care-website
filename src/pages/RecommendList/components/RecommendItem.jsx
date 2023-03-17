//Lib
//Components
import React from "react";
//Styled
import styles from "./RecommendItem.module.less";

const RecommendItem = (props) => {
  const { description, title } = props;
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}></div>
      <div className={styles.description}> {description}</div>
    </div>
  );
};

export default RecommendItem;
