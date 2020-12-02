const routes = [
  {
    path: "/",
    models: () => [import("stores/login")],
    component: () => import("pages/login"),
  },
  {
    path: "/login",
    models: () => [import("stores/login")],
    component: () => import("pages/login"),
  },
];
export default routes;
