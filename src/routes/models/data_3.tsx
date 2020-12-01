const routes = [
  {
    path: "/data_3/view_1",
    models: () => [import("stores/login")],
    name: "展示页面1",
    icon: "iconchengzhong",
    component: () => import("pages/data_3/view_1"),
  },
  {
    path: "/data_3/view_2",
    models: () => [import("stores/login")],
    name: "展示页面2",
    icon: "iconchengzhong",
    component: () => import("pages/data_3/view_2"),
  },
  {
    path: "/data_3/view_3",
    models: () => [import("stores/login")],
    name: "展示页面3",
    icon: "iconchengzhong",
    component: () => import("pages/data_3/view_3"),
  },
  {
    path: "/data_3/view_4",
    models: () => [import("stores/login")],
    name: "展示页面2",
    icon: "iconchengzhong",
    component: () => import("pages/data_3/view_4"),
  },
];
export default routes;
