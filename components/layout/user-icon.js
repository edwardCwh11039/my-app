import {
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import Link from "antd/lib/typography/Link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Role } from "../../lib/constant";
import apiService from "../../lib/services/api-service";
import storage from "../../lib/services/storage";
import { useUserRole } from "../custom-hooks/login-state";
import { HeaderIcon } from "./style";

export default function UserIcon() {
  const router = useRouter();
  const onLogout = async () => {
    const { data: isLogout } = await apiService.logout();

    if (isLogout) {
      storage.deleteUserInfo();
      router.push("/login");
    }
  };
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (storage.role === Role.student || storage.role === Role.teacher) {
      apiService.getProfileByUserId(storage.userId).then((res) => {
        const { data } = res;

        setAvatar(data?.avatar);
      });
    }
  }, []);

  return (
    <HeaderIcon style={{ marginLeft: "2em" }}>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item onClick={onLogout} key="logout">
              <LogoutOutlined />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        }
        placement="bottomLeft"
      >
        {avatar ? <Avatar src={avatar} /> : <Avatar icon={<UserOutlined />} />}
      </Dropdown>
    </HeaderIcon>
  );
}
