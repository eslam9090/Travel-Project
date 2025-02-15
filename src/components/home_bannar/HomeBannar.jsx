import SlideBannar from "../slide_bannar/SlideBannar";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeBannar.module.css";
const HomeBannar = () => {
  const slideData = [
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747486.jpg?t=st=1737227198~exp=1737230798~hmac=58b40d3083387118dd9135b5bd1fd3f082b6e10c2422a4e2cda28774d7457e59&w=826",
      text: "Lorem ipsum dolor",
      title: "Himchal",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895679.jpg?t=st=1737227132~exp=1737230732~hmac=dd5ab3eff3a5596011d3ec603028eb4e843df1dab26523a29abb62513ca98fdf&w=740",
      text: "Lorem ipsum dolor ipsum",
      title: "Whaelre",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/travel-destination-view-from-airplane-window_23-2151382931.jpg?t=st=1737227041~exp=1737230641~hmac=0a4d74a425919ff9a23db33f7d8a46a3705237df9a2df5245577a821e378c1ff&w=740",
      text: "Lorem ipsum dolor ipsum",
      title: "Khaledanw",
    },
    {
      id: Math.random().toString(),
      image:
        "https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?t=st=1737227319~exp=1737230919~hmac=f444e30412173c13eec9eef0b411104b3039dee13b7dc031de26d434e3f05bd0&w=740",
      text: "Lorem ipsum dolor ipsum",
      title: "Crystal Mountain",
    },
  ];
  return (
    <div className={styles.home_bannar_container}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {slideData.map((slide) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide>
            <SlideBannar
              key={slide.id}
              image={slide.image}
              text={slide.text}
              title={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBannar;
