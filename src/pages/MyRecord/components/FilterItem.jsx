//Lib
//Components
import React from "react";
//Styled
import styles from "./FilterItem.module.less";
import { d01 } from "@Assets/images/index";
import { Row, Col } from "antd";
import className from "classnames";
const FilterItem = (props) => {
  const { icon, label, currentValue, value, onChange = () => {} } = props;
  return (
    <div
      onClick={() => onChange(value)}
      className={className(styles.component, {
        [styles.componentActive]: currentValue === value,
      })}
    >
      {label}
    </div>
  );
};

export default FilterItem;
