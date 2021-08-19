import { DashboardOutlined, ProjectOutlined, ReadOutlined } from "@ant-design/icons";
import React from "react";
import { Role } from "./role";

/**
 * router path
 */
export const RoutePath = {
  vehicle: "vehicle",
};

const overview = {
  path: [],
  label: "Overview",
  icon: <DashboardOutlined />,
};

const vehicle = {
  path: [RoutePath.vehicle],
  label: "Vehicle",
  icon: <ReadOutlined />,
  hideLinkInBreadcrumb: true,
  subNav: [{ path: [""], label: "All Vehicle", icon: <ProjectOutlined /> }],
};

export const routes = new Map([[Role.Manager, [overview, vehicle]]]);
