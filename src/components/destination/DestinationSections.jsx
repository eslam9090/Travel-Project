import DestinationCards from "../destination_cards/DestinationCards";
import Heading from "../heading/Heading";
import styles from "./DestinationSection.module.css";
import { Element } from "react-scroll";
const Destination = () => {
  const destinationData = [
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-vector/realistic-summer-background_23-2148169551.jpg?t=st=1737230886~exp=1737234486~hmac=e653d08abaa96d0811bd9002e6c8b1c3f4de80471212b8824c78608bdb2992d1&w=740",
      text: " Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty",
      title: "Mumbai",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6794.jpg?t=st=1737374758~exp=1737378358~hmac=3e6b483c1cf12780c960e6869bbd40232287911c16b42baf4aea460fe3c09f6c&w=740",
      text: " Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty and one of the wonders of the world",
      title: "Taj Mahal",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-psd/beach-concept-with-slate-flip-flops_23-2147649393.jpg?t=st=1737374877~exp=1737378477~hmac=59270d29d2fbd3eeb56f7fe77106319b15d3f6fac1922624829995e559e1724a&w=740",
      text: " Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Own beauty and one of the wonders of the world",
      title: "Gknowledge",
    },
  ];

  return (
    <Element name="destination">
      <div className={styles.destination_section}>
        <Heading title="The Destination" />
        <div className={styles.destination_cards}>
          {destinationData.map((destination) => (
            <DestinationCards
              key={destination.id}
              image={destination.image}
              text={destination.text}
              title={destination.title}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Destination;
