import styles from "./Navbar.module.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <h1>Travelo</h1>
      </div>
      <HiMenuAlt3 size={35} fill="#fff" className={styles.navbar_toggle} />
      <ul className={styles.navbar_links}>
        <li>
          <Link to="destination" smooth={true} duration={100}>
            Destination
          </Link>
        </li>
        <li>
          <Link to="video" smooth={true} duration={100}>
            Our activity
          </Link>
        </li>
        <li>
          <Link to="trips" smooth={true} duration={100}>
            Trips
          </Link>
        </li>
        <li>
          <Link to="branding" smooth={true} duration={100}>
            Who We Are?
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
