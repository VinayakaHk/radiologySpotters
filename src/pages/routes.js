import { createRouter } from "vue-router";
import StartPage from "./start/StartPage.vue";
import Questions from "./questions/Questions.vue";
import Quiz from "../components/Quiz.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/questions",
    name: "questions",
    component: Questions,
  },
  {
    path: "/questions/:blockId/:questionId",
    name: "quiz",
    component: Quiz,
  },
  {
    path: "/questions/:blockId/",
    redirect: "/questions/:blockId/1",
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
