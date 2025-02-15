import styles from "./SlideBannar.module.css";
import { motion } from "motion/react";
// eslint-disable-next-line react/prop-types
const SlideBannar = ({ text, title, image }) => {
  return (
    <div className={styles.slide_bannar_container}>
      <img src={image} alt="image-bannar" />
      <div className={styles.slide_bannar_overlay}>
        <div className={styles.slide_bannar_text}>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.1 }}
          >
            {text}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default SlideBannar;
