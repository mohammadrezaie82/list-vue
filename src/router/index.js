import { createRouter, createWebHistory } from "vue-router";
import AddProject from "../view/AddProject.vue";
import HomeList from "../view/HomeList.vue";
import EditProject from "../view/EditProject.vue";

const routes = [
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/",
    name: "Home",
    component: HomeList,
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
