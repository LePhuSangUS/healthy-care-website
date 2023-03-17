//Lib
//Components
import React from "react";
//Styled
import styles from "./RecordItem.module.less";

const RecordItem = (props) => {
  const { image, description, title } = props;
  return (
    <div className={styles.component}>
      <img className={styles.image} src={image} alt="image" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}> {description}</p>
      </div>
    </div>
  );
};

export default RecordItem;
