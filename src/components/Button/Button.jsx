
import styles from "./Button.module.less";
const CustomButton = (props) => {
  const { className, children, ...rest } = props;
  return <div className={styles.component}>{children}</div>;
};

export default CustomButton;
