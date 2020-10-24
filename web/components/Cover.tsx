import React  from "react";
import Header from "../components/Header";
import classnames from "classnames";
import styles from "./Cover.module.scss";

const Cover = () => (
  <div className={classnames(styles.cover)}>
  {/* <Banner></Banner> */}
  <Header></Header>
</div>
);

export default Cover;
