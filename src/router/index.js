import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Login/index.vue"),
    },
    {
      path: "/goods/:id",
      name: "goodsDetail",
      component: () => import("@/views/GoodsDetail/index.vue"),
      props: true, // 允许将路由参数作为 props 传递
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "goodsDetail") {
    var token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
