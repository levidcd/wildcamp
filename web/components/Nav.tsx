import React from "react";
import Link from 'next/link'
import classnames from "classnames";

import styles from "./Nav.module.scss";

const Nav = () => (
  <div className={classnames(styles.nav)}>
    <div>
      <div><Link href="/">logo</Link></div>
      <div></div>
    </div>
    <div><Link href="/about">me</Link></div>
  </div>
);

export default Nav;
