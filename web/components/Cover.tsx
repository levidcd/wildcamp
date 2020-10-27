import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Cover.module.scss";
import Link from "next/link";
import { routeMapData } from "../utils/routemap";
import { useRouter } from "next/router";
import {
  QuestionOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import Scene from './Scene'

const Cover = () => {
  const [showPanel, setShowPanel] = useState(false);
  const router = useRouter();

  return (
    <div className={classnames(styles.cover)}>
      <Scene></Scene>
      <div
        className={classnames(styles.headerPanel, showPanel ? "active" : "")}
      >
        <div className={classnames(styles.menuWrapper)}>
          <ul>
            {router.route === routeMapData.index.route ? (
              ""
            ) : (
              <li>
                <Link href={routeMapData.index.route}>首页</Link>
              </li>
            )}
            <li>
              <Link href={routeMapData.topic.route}>专栏</Link>
            </li>
            <li>
              <Link href={routeMapData.timeline.route}>日志</Link>
            </li>
            <li>
              <Link href={routeMapData.concat.route}>联系我</Link>
            </li>
            <li>
              <Link href={routeMapData.about.route}>关于</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classnames(styles.header)}>
        <a>
          <QuestionOutlined style={{ fontSize: "16px" }} />
        </a>
        <a onClick={() => setShowPanel(!showPanel)}>
          {showPanel ? (
            <CloseOutlined style={{ fontSize: "16px" }} />
          ) : (
            <MenuOutlined style={{ fontSize: "16px" }} />
          )}
        </a>
      </div>
    </div>
  );
};

export default Cover;
