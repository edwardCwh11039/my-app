import { memoize } from "lodash";
import { useRouter } from "next/router";
import { useUserRole } from "../../components/custom-hooks/login-state";

/**
 * 生成key
 */
export const generateKey = (data, index) => {
  return `${data.label}_${index}`;
};

/**
 *  通过key获取当前sideNav的名称，也就是label
 */
export const getSideNavNameByKey = (key) => {
  return key.split("/").map((item) => item.split("_")[0]);
};

/**
 * 生成路径
 * @param data - side nav config
 */
const generatePath = (data) => {
  return data.path.join("/");
};

/**
 * 生成key 或 path 的工厂函数
 * @param fn - 生成key或path的函数
 * @return - 执行函数
 */
const generateFactory = (fn) =>
  function inner(data, current = "") {
    const keys = data.map((item, index) => {
      let key = fn(item, index);

      if (current) {
        key = [current, key].join("/");
      }

      if (item.subNav && !!item.subNav.length) {
        return inner(item.subNav, key).map((item) => item.join("/"));
      } else {
        return [key];
      }
    });

    return keys;
  };

/**
 * 判断当前路径是否指向一个详情页
 */
const isDetailPath = (path) => {
  const paths = path.split("/");
  const length = paths.length;
  const last = paths[length - 1];
  const reg = /\[.*\]/;

  return reg.test(last);
};

/**
 * 忽略详情路径上的参数路径
 */
const omitDetailPath = (path) => {
  const isDetail = isDetailPath(path);

  return isDetail ? path.slice(0, path.lastIndexOf("/")) : path;
};

/**
 * 根据路由信息找出生成当前side nav 的 key，path 信息
 */
const GetKeyPathInfo = (data) => {
  const getPaths = generateFactory(generatePath);
  const userRole = useUserRole();
  const paths = getPaths(data)
    .reduce((acc, cur) => [...acc, ...cur], [])
    .map((item) =>
      ["/dashboard", userRole, item].filter((item) => !!item).join("/")
    );
  const getKeys = generateFactory(generateKey);
  const keys = getKeys(data).reduce((acc, cur) => [...acc, ...cur], []);

  return { keys, paths };
};

const isPathEqual = (target) => (current) => {
  current = current.endsWith("/") ? current.slice(0, -1) : current;

  return current === target;
};

/**
 * 根据路径获取sideNav名称
 */
export const getSideNavNameByPath = (data, path) => {
  const isDetail = isDetailPath(path);

  path = isDetail ? path.split("/").slice(0, -1).join("/") : path;

  const { paths, keys } = memoizedGetKeyPathInfo(data);
  const isEqual = isPathEqual(path);
  const index = paths.findIndex(isEqual);
  const result = getSideNavNameByKey(keys[index]);

  return isDetail ? [...result, "Detail"] : result;
};
