import { Route, RouteMap } from "../interfaces/route";

/** 路由静态配置 */
export const routeMapData: { [index: string]: Route } = {
  index: { name: "index", route: "/", desc: "首页" },
  timeline: { name: "timeline", route: "/pins/timeline", desc: "日志" },
  topic: { name: "topic", route: "/topic", desc: "专栏" },
  concat: { name: "concat", route: "/concat", desc: "联系我" },
  about: { name: "about", route: "/about", desc: "关于" },
};
