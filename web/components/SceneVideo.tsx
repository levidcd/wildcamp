import React from "react";
import classnames from "classnames";
import styles from "./SceneVideo.module.scss";
// import Parallax from "parallax-js";


const Scene = () => (
  <div className={classnames(styles.bannerWrapper)}>
    <div id="scene">
      <div className={classnames(styles.layer)}>
        {/* <img
          id="image"
          className={classnames(styles.image)}
          src="/images/banner.png"
        /> */}
        <video id="video" muted
          className={classnames(styles.video)} preload="auto"  autoplay="autoplay" loop="loop" src="/video/LIP.mp4"></video>
      </div>
    </div>
    {/* <div className={classnames(styles.misk)} id="vibrant">
      <svg
        // viewBox="0 0 2880 1620"
        width="100%"
        // height="100%"
        preserveAspectRatio="xMaxYMax slice" fill="3c3c3c3"
      >
        <polygon opacity="0.7"  points="2000,1620 0,1620 0,0 600,0 " />
      </svg>
      <div></div>
    </div> */}
  </div>
);

export default Scene;
