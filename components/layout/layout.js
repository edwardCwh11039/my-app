import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import styled from "styled-components";
import { useUserRole } from "../custom-hooks/login-state";
import Link from "next/link";
import { HeaderIcon } from "./style";
import UserIcon from "./user-icon";
import { routes } from "../../lib/constant/cms-routes";
import { RenderMenuItems } from "../../lib/util/cms-menu-util";

const Logo = styled.div`
  height: 64px;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  letter-space: 5px;
  text-shadow: 5px 1px 5px;
  transform: rotateX(45deg);
  font-family: monospace;
`;
const StyledLayoutHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledContent = styled(Content)`
  margin: 16px;
  background-color: #fff;
  padding: 16px;
  min-height: auto;
`;

export default function AppLayout(props) {
  const { children } = props;
  const [collapsed, toggleCollapse] = useState(false);
  const userRole = useUserRole();
  const sideNave = routes.get(userRole);
  const menuItems = RenderMenuItems(sideNave);
  //   const { defaultOpenKeys, defaultSelectedKeys } = getMenuConfig(sideNave);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(isCollapsed) => toggleCollapse(isCollapsed)}
      >
        {
          <Logo>
            <Link href="/">
              <span style={{ color: "#fff", cursor: "pointer" }}>Kinta</span>
            </Link>
          </Logo>
        }
        <Menu
          theme="dark"
          mode="inline"
          //   defaultOpenKeys={defaultOpenKeys}
          //   defaultSelectedKeys={defaultSelectedKeys}
        >
          {menuItems}
        </Menu>
      </Sider>

      <Layout id="contentLayout" style={{ overflowX: "hidden" }}>
        <StyledLayoutHeader>
          <HeaderIcon onClick={() => toggleCollapse(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </HeaderIcon>

          <Row align="middle">
            <UserIcon />
          </Row>
        </StyledLayoutHeader>

        <StyledContent>{children}</StyledContent>
      </Layout>
    </Layout>
  );
}
