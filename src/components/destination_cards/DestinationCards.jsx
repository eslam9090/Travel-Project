import styles from "./DestinationCards.module.css";
// eslint-disable-next-line react/prop-types
const DestinationCards = ({ image, title, text }) => {
  return (
    <div className={styles.destination_card}>
      <div className={styles.destination_image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.destination_text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DestinationCards;
