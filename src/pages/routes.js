import { createRouter } from "vue-router";
import StartPage from "./start/StartPage.vue";
import Questions from "./questions/Questions.vue";
const routes = [
  {
    path: "/",
    component: StartPage,
  },
  {
    path: "/questions",
    component: Questions,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
