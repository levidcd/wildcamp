import React from "react";
import Link from "next/link";
import { routeMapData } from "../utils/routemap";
import classnames from "classnames";

import styles from "./Nav.module.scss";

const Nav = () => (
  <div className={classnames(styles.nav)}>
    <div>
      <div>
        <Link href={routeMapData.index.route}>logo</Link>
      </div>
      <div></div>
    </div>
    <div>
      <Link href={routeMapData.about.route}>me</Link>
    </div>
  </div>
);

export default Nav;
