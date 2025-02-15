import BrandingCards from "../branding_cards/BrandingCards";
import styles from "./Branding.module.css";
import Marquee from "react-fast-marquee";
import { Element } from "react-scroll";

const Branding = () => {
  return (
    <Element name="branding">
      <div className={styles.branding_container}>
        <div className={styles.branding}>
          <Marquee>
            <BrandingCards />
            <BrandingCards />
            <BrandingCards />
          </Marquee>
        </div>
      </div>
    </Element>
  );
};

export default Branding;
