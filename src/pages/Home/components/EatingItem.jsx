//Lib
//Components
import React from "react";
//Styled
import styles from "./EatingItem.module.less";

const EatingItem = (props) => {
  const { image, date, type } = props;
  return (
    <div className={styles.component}>
      <img className={styles.image} src={image} alt="image" />
      <label className={styles.label}>
        {date}.{type}
      </label>
    </div>
  );
};

export default EatingItem;
