//Lib
//Components
import React from "react";
//Styled
import styles from "./Header.module.less";
import { iconMenu, iconClose } from "@Assets/icons/index";
import { logo } from "@Assets/logo";
import { Link, useLocation } from "react-router-dom";
import { HEADER_DATA_LIST, MENU_DATA_LIST } from "@Consts";
import { ROUTES_NAME } from "../../appRoute/routes-name";
import { Dropdown, Space } from "antd";
import { useToggle } from "react-use";
import classNames from "classnames";
const Header = (props) => {
  const [open, toggleOpen] = useToggle(false);
  const items = MENU_DATA_LIST?.map((item) => {
    return {
      ...item,
      label: (
        <Link onClick={() => toggleOpen(!open)} to={item.path}>
          {item.label}
        </Link>
      ),
    };
  });

  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className={styles.component}>
      <div className={styles.navContainer}>
        <Link to={ROUTES_NAME.HOME}>
          <img className={styles.navBrand} src={logo} alt="logo" />{" "}
        </Link>
        <div className={styles.navMain}>
          <nav className={styles.navContent}>
            {HEADER_DATA_LIST?.map((item) => {
              return (
                <Link
                  className={classNames(styles.navItem, {
                    [styles.navItemActive]: pathname === item.path,
                  })}
                  key={item.id}
                  to={item.path}
                >
                  <img src={item.icon} alt="icon" />
                  {item?.subIcon && (
                    <img
                      className={styles.subIcon}
                      src={item.subIcon}
                      alt="icon"
                    ></img>
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <Dropdown
            overlayClassName={styles.dropdownMenu}
            placement="bottomRight"
            menu={{ items }}
            trigger={["click"]}
            onOpenChange={() => {
              console.log("FFF");
            }}
          >
            <a onClick={(e) => {
                toggleOpen();
                e.preventDefault();
              }}
            >
              <div className={styles.navMenu}>
                <img
                  src={open ? iconClose : iconMenu}
                  className={styles.menuIcon}
                />
              </div>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
