import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import UserView from "@/views/UserView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/callback",
    name: "User",
    component: UserView,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
