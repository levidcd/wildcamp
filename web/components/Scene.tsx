import React from "react";
import classnames from "classnames";
import styles from "./Scene.module.scss";
// import Parallax from "parallax-js";

// function coverLayer() {
//   let id = document.getElementById("scene"),
//     _w = parseInt(this.boxW),
//     _h = parseInt(this.boxH),
//     x,
//     y,
//     i,
//     e = _w >= 1000 || _h >= 1000 ? 1000 : 500;
//   if (_w >= _h) {
//     i = (_w / e) * 50;
//     y = i;
//     x = (i * _w) / _h;
//   } else {
//     i = (_h / e) * 50;
//     x = i;
//     y = (i * _h) / _w;
//   }
//   const style = {
//     width: _w + x + "px",
//     height: _h + y + "px",
//     marginLeft: -0.5 * x + "px",
//     marginTop: -0.5 * y + "px",
//   };
//   this.layerStyle = Object.assign({}, this.layerStyle, style);
//   this.coverImg();
// }
// // Cover image size calculation
// function coverImg() {
//   const scene = document.getElementById("scene");
//   const parallaxInstance = new Parallax(scene, {
//     relativeInput: true,
//     clipRelativeInput: true,
//   });
//   parallaxInstance.friction(0.2, 0.2);

//   const width = parseInt(this.layerStyle.width),
//     height = parseInt(this.layerStyle.height),
//     ratio = 1080 / 1920,
//     style: Object = {};
//   const compute = height / width > ratio;
//   style["width"] = compute ? height / ratio + "px" : `${width}px`;
//   style["height"] = compute ? `${height}px` : width * ratio + "px";

//   style["left"] = (width - parseInt(style.width)) / 2 + "px";
//   style["top"] = (height - parseInt(style.height)) / 2 + "px";
//   this.imgStyle = Object.assign({}, this.imgStyle, style);
// }

const Scene = () => (
  <div className={classnames(styles.bannerWrapper)}>
    <div id="scene">
      <div className={classnames(styles.layer)}>
        <img
          id="image"
          className={classnames(styles.image)}
          src="/images/banner.png"
        />
      </div>
    </div>
    <div className={classnames(styles.misk)} id="vibrant">
      <svg
        viewBox="0 0 2880 1620"
        height="100%"
        preserveAspectRatio="xMaxYMax slice" fill="rgb(120, 24, 33)"
      >
        <polygon opacity="0.7"  points="2000,1620 0,1620 0,0 600,0 " />
      </svg>
      <div></div>
    </div>
  </div>
);

export default Scene;
