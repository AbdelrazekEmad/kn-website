const dashboard_routes = [
  {
    path: "dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/dashboard.vue"),
    redirect: {
      name: "dashboard-calender",
    },
    children: [
      {
        path: "calender",
        name: "dashboard-calender",
        component: () => import("@/views/dashboard/calender.vue"),
      },
      {
        path: "profile",
        name: "dashboard-profile",
        component: () => import("@/views/dashboard/profile.vue"),
      },
    ],
  },
];

export default dashboard_routes;
