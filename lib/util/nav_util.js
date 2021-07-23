import { useRouter } from "next/dist/client/router";

export const generateKey = (data, index) => {
  return `${data.label}_${index}`;
};

const isDetailPath = (path) => {
  const paths = path.split("/");
  const reg = /\[id]/;

  return reg.test(paths[paths.length - 1]);
};

const generatePath = (data) => data.path;

const generateFactory = (fn, data, current = "") => {
  const keys = data.map((item, index) => {
    let key = fn(item, index);
    if (current) {
      key = [current, key].join("/");
    }

    if (item.subNav && !!item.subNav.length) {
      return generateFactory(fn, item.subNav, key);
    } else {
      return [key];
    }
  });

  return keys.flat();
};

const getKeyPathInfo = (data) => {
  const paths = generateFactory(generatePath, data).map((item) =>
    [item].join("/")
  );
  const keys = generateFactory(generateKey, data);

  return { paths, keys };
};

const isPathEqual = (paths, target) =>
  paths.findIndex((path) => {
    path = path.endsWith("/") ? path.slice(0, -1) : path;

    return path === target;
  });

export const GetActiveKey = (data) => {
  const { pathname } = useRouter();
  const isDetail = isDetailPath(pathname);

  const path = isDetail
    ? pathname.slice(0, pathname.lastIndexOf("/"))
    : pathname;
  const { paths, keys } = getKeyPathInfo(data);
  const index = isPathEqual(paths, path);
  const activeKey = keys[index] || "";

  return { activeKey };
};
