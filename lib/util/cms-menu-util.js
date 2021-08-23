import { Menu } from "antd";
import Link from "next/link";
import { useUserRole } from "../../components/custom-hooks/login-state";
import { generateKey } from "./nav_util";

export function RenderMenuItems(data, parent = "") {
  const userRole = useUserRole();

  return data.map((item, index) => {
    const key = generateKey(item, index);

    if (item.subNav && !!item.subNav.length) {
      return (
        <Menu.SubMenu key={key} title={item.label} icon={item.icon}>
          {RenderMenuItems(item.subNav, item.path.join("/"))}
        </Menu.SubMenu>
      );
    } else {
      return item.hide ? null : (
        <Menu.Item key={key} title={item.label} icon={item.icon}>
          {!!item.path.length ||
          item.label.toLocaleLowerCase() === "overview" ? (
            <Link
              href={["/dashboard", userRole, parent, ...item.path]
                .filter((item) => !!item)
                .join("/")}
              replace
            >
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </Menu.Item>
      );
    }
  });
}
