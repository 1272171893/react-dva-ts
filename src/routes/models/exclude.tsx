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
  {
    path: "/404",
    models: () => [import("stores/login")],
    component: () => import("pages/login/404"),
  },
];
export default routes;
