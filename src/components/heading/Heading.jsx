import styles from "./Heading.module.css";

// eslint-disable-next-line react/prop-types
const Heading = ({ title }) => {
  return <h2 className={styles.global_heading}>{title}</h2>;
};

export default Heading;
