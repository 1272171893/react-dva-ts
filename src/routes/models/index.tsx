const routes = [
  {
    path: "/",
    models: () => [import("stores/login")],
    component: () => import("pages"),
  },
];
export default routes;
