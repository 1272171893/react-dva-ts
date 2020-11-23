const routes = [
  {
    path: "/",
    models: () => [import("stores/global")],
    component: () => import("pages"),
  },
];
export default routes;
