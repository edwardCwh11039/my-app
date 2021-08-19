import React, { useEffect, useState } from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { getChildrenToRender } from "../../lib/util/landing";

const { Item, SubMenu } = Menu;

export default function Header(props) {
  const [phoneOpen, setPhoneOpen] = useState(undefined);
  const [navData, setNavData] = useState([]);
  const phoneClick = () => setPhoneOpen(!phoneOpen);
  const moment = phoneOpen === undefined ? 300 : null;
  const { dataSource, isMobile, ...otherProps } = props;

  useEffect(() => {
    const data = dataSource.Menu.children;
    const navChildren = data.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    setNavData(navChildren);
  }, [props]);

  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: "from" }}
      {...dataSource.wrapper}
      {...otherProps}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}${phoneOpen ? " open" : ""}`}
      >
        <TweenOne
          animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
          {...dataSource.logo}
        >
          <a href={dataSource.logo.link}>
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </a>
        </TweenOne>
        {isMobile && (
          <div {...dataSource.mobileMenu} onClick={() => phoneClick()}>
            <em />
            <em />
            <em />
          </div>
        )}
        <TweenOne
          {...dataSource.Menu}
          animation={
            isMobile
              ? {
                  height: 0,
                  duration: 300,
                  onComplete: (e) => {
                    if (phoneOpen) {
                      e.target.style.height = "auto";
                    }
                  },
                  ease: "easeInOutQuad",
                }
              : null
          }
          moment={moment}
          reverse={!!phoneOpen}
        >
          <Menu
            mode={isMobile ? "inline" : "horizontal"}
            defaultSelectedKeys={["sub0"]}
            theme="dark"
          >
            {navData}
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  );
}
