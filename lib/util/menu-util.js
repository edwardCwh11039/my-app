import { Menu } from "antd";
import Link from "next/link";
import { generateKey } from "./nav_util";

export default function renderMenuItems(data, parent = "") {
  return data.map((item, index) => {
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
          <Link
            href={["/dashboard", parent, ...item.path]
              .filter((item) => !!item)
              .join("/")}
            replace
          >
            {item.label.toUpperCase()}
          </Link>
        </Menu.Item>
      );
    }
  });
}
