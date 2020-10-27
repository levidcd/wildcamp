import { Timeline } from "antd";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "./404.module.scss";
import classnames from "classnames";

const Topic = () => (
  <div className={styles.contain}>
    <div className={classnames(styles.wrap)}>
      <Link href="/">
        <div data-text="404" className={classnames(styles.text)}>
          404
        </div>
      </Link>
    </div>
  </div>
);

export default Topic;
