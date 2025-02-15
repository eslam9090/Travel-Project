import styles from "./LayoutContainer.module.css";

// eslint-disable-next-line react/prop-types
const LayoutContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default LayoutContainer;
