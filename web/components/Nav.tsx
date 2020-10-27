import React from "react";
import Link from "next/link";
import { routeMapData } from "../utils/routemap";
import classnames from "classnames";
import AudioPlayer from "./AudioPlayer";

import styles from "./Nav.module.scss";

const Nav = () => (
  <div className={classnames(styles.nav)}>
    <ul className={classnames(styles.left)}>
      <li>
        <Link href={routeMapData.index.route}>logo</Link>
      </li>
      <li>
        <AudioPlayer></AudioPlayer>
      </li>
    </ul>
    <div>
      <Link href={routeMapData.about.route}>me</Link>
    </div>
  </div>
);

export default Nav;
