import Heading from "../heading/Heading";
import TripCards from "../trip_cards/TripCards";
import styles from "./TripsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Element } from "react-scroll";

const TripsSection = () => {
  const tripsData = [
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/top-view-white-toy-plane-map_23-2148666303.jpg?t=st=1737425579~exp=1737429179~hmac=7c7e73564db65b42715204b95d9f398b8beeb0634a92ec31bf8ab1aebc57857e&w=740",
      text: " Explore breathtaking US National Parks, head to Scandinavia for long",
      title: "Summer Trip4",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/happy-woman-posing-luggage_23-2148434399.jpg?t=st=1737425400~exp=1737429000~hmac=f029a146366d3cde93d01e2219a0595c335abcc26f0b8acb85b6ab1194f35c08&w=740",
      text: " Explore breathtaking US National Parks, head to Scandinavia for long",
      title: "Summer Trip1",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/premium-photo/flat-lay-travel-essentials-hat_23-2148434411.jpg?w=740",
      text: " Explore breathtaking US National Parks, head to Scandinavia for long",
      title: "Summer Trip2",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/full-shot-man-posing-with-baggage_23-2149243431.jpg?t=st=1737425472~exp=1737429072~hmac=79913e20cd23d43c59960b1e59401c255cb742b375a16c28fa3cae232619e2a7&w=740",
      text: " Explore breathtaking US National Parks, head to Scandinavia for long",
      title: "Summer Trip3",
    },
  ];

  return (
    <Element name="trips">
      <div className={styles.trips_section}>
        <Heading title="The Trips" />
        <div className={styles.trips_cards}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1.1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1250: {
                slidesPerView: 3.2,
              },
            }}
          >
            {tripsData.map((trip) => (
              // eslint-disable-next-line react/jsx-key
              <SwiperSlide>
                <TripCards
                  key={trip.id}
                  image={trip.image}
                  text={trip.text}
                  title={trip.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Element>
  );
};

export default TripsSection;
