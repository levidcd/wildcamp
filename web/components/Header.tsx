import React from "react";
import classnames from "classnames";
import Link from "next/link";
import styles from "./Header.module.scss";
import { QuestionOutlined, MenuOutlined } from "@ant-design/icons";

const Header = () => (
  <div className={classnames(styles.header)}>
    <div>
      <QuestionOutlined style={{ fontSize: "16px" }} />
    </div>
    <a className={classnames(styles.headerPanel)}>
      <Link href='/articles'>article</Link>
      <Link href='/articles'>article</Link>
      <Link href='/articles'>article</Link>
    </a>
    <div>
      <MenuOutlined style={{ fontSize: "16px" }} />
    </div>
  </div>
);

export default Header;
