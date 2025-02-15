import styles from "./VideoSection.module.css";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Element } from "react-scroll";

const VideoSection = () => {
  const [Video, setVideo] = useState(false);
  return (
    <Element name="video">
      <div className={styles.video_section}>
        <div className={styles.video_icon} onClick={() => setVideo(true)}>
          <TbPlayerPlayFilled />
        </div>
        {Video && (
          <div className={styles.video_source}>
            <ReactPlayer
              width={"80%"}
              height={"80%"}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
            <div className={styles.close_video} onClick={() => setVideo(false)}>
              <IoMdClose />
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default VideoSection;
