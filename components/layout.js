import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { routes } from "../lib/routes";
import { generateKey, GetActiveKey } from "../lib/util/nav_util";
import { PhoneOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
`;

const FooterMenu = styled.div``;

const CopyRightWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: left;
  color: #b2b2b2;
`;

function renderMenuItems(routes, parent = "") {
  return routes.map((item, index) => {
    const key = generateKey(item, index);

    if (item.subNav && !!item.subNav.length) {
      return (
        <Menu.SubMenu key={key} title={item.label}>
          {renderMenuItems(item.subNav, `${item.path}`)}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={key} title={item.label}>
          <Link href={`/${item.path}`}>{item.label.toUpperCase()}</Link>
        </Menu.Item>
      );
    }
  });
}

export default function AppLayout(props) {
  const menuItems = renderMenuItems(routes);
  const { activePath, activeKey } = GetActiveKey(routes);
  const keys = activeKey.split("/");

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Logo></Logo>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={keys}
          style={{ float: "right" }}
        >
          {menuItems}
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: "0", marginTop: 64 }}>
        {props.children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#2f2f2f",
          marginTop: "2em",
        }}
      >
        <CopyRightWrapper>
          <p>Copyright © 2021. All rights reserved by Company</p>
        </CopyRightWrapper>
      </Footer>
    </Layout>
  );
}
