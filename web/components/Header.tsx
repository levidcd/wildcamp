import React from "react";
import classnames from "classnames";
import styles from "./Header.module.scss";
import { QuestionOutlined,MenuOutlined } from "@ant-design/icons";

const Header = () => (
  <div className={classnames(styles.header)}>
    <div>
      <QuestionOutlined style={{ fontSize: "16px" }} />
    </div>
    <div><MenuOutlined style={{ fontSize: "16px" }}  /></div>
  </div>
);

export default Header;
