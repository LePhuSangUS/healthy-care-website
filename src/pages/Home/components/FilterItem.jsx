//Lib
//Components
import React from "react";
//Styled
import styles from "./FilterItem.module.less";
const FilterItem = (props) => {
  const { icon, label } = props;
  return (
    <div className={styles.component}>
      <div className={styles.hexagon}></div>
      <div className={styles.content}>
        <img className={styles.icon} src={icon} />
        <label className={styles.label}>{label}</label>
      </div>
    </div>
  );
};

export default FilterItem;
