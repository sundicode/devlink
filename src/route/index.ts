import { createRouter, createWebHashHistory } from "vue-router";
import LinksViewVue from "../views/LinksView.vue";
import ProfileViewVue from "../views/ProfileView.vue";
import UsersLayoutVue from "../views/UsersLayout.vue";
import PreviewViewVue from "../views/PreviewView.vue";

const routes = [
  {
    name: "usersLayout",
    path: "/",
    component: UsersLayoutVue,
    children: [
      {
        name: "profile",
        path: "/profile",
        component: ProfileViewVue,
      },
      {
        name: "links",
        path: "/",
        component: LinksViewVue,
      },
    ],
  },
  {
    name: "preview",
    path: "/preview",
    component: PreviewViewVue,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
