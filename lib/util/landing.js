// import React from "react";
import { Button } from "antd";
import React from "react";

export const isImg = [
  /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,
  /[\/.](gif|jpg|jpeg|tiff|png)$/i,
];
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf("title") === 0 ? "h1" : "div";
  tag = item.href ? "a" : tag;
  let children =
    typeof item.children === "string" &&
    isImg.some((rx) => rx.test(item.children))
      ? React.createElement("img", { src: item.children, alt: "img" })
      : item.children;
  if (item.name.indexOf("button") === 0 && typeof item.children === "object") {
    children = React.createElement(Button, {
      ...item.children,
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
