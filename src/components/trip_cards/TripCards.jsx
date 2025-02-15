import styles from "./TripCards.module.css";
// eslint-disable-next-line react/prop-types
const TripCards = ({ image, title, text }) => {
  return (
    <div className={styles.trips_card}>
      <div className={styles.trips_card_image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.trips_card_text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.trips_card_button}>
        <button>Details</button>
      </div>
    </div>
  );
};

export default TripCards;
