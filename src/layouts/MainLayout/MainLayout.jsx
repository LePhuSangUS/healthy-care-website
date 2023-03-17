//Lib
//Components
import React from "react";
//Styled
import styles from "./MainLayout.module.less";
import { Outlet } from "react-router";
import { Header, Footer } from "@Components";
import { BackTop } from "antd";
import { iconCScroll } from "@Assets/icons";

const MainLayout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.outlet}>{<Outlet />}</div>
      <Footer />
      <BackTop
      // visibilityHeight={300}
      >
        <img src={iconCScroll} alt="icon" />
      </BackTop>
    </div>
  );
};

export default MainLayout;
