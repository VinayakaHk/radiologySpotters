import { createRouter } from "vue-router";
import StartPage from "./start/StartPage.vue";
import Questions from "./questions/Questions.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/questions",
    name: "questionsNoParams",
    component: Questions,
  },
  {
    path: "/questions/:blockId/:questionId",
    name: "questionsWithParams",
    component: Questions,
  },
  {
    path: "/questions/:blockId/",
    redirect: (to) => {
      const blockId = to.params.blockId;
      return `/questions/${blockId}/0`;
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundPage,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
