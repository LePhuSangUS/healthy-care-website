//Lib
//Components
import React from "react";
//Styled
import styles from "./Footer.module.less";
import { Link } from "react-router-dom";
import { FOOTER_DATA_LIST } from "@Consts";

const Footer = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        {FOOTER_DATA_LIST?.map((item) => (
          <Link className={styles.item} key={item.id} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
