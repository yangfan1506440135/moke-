import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/newtest",
    name: "newtest",
    component: resolve =>
        require(["@/views/newText.vue"], resolve)
  },
];

const router = new VueRouter({
  routes
});

export default router;
