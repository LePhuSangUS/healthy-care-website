//Lib
//Components
import React from "react";
//Styled
import styles from "./MyExerciseItem.module.less";
import { d01 } from "@Assets/images/index";
import { Row, Col } from "antd";
import className from "classnames";
const MyExerciseItem = (props) => {
  const { time, label, value } = props;
  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <div className={styles.label}>
          <span className={styles.dot}>&#x2022;</span>
          <span>{label}</span>
        </div>
        <span className={styles.time}>{time}</span>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default MyExerciseItem;
