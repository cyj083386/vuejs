import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Page404 from './components/Page404.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    components: {
      default: List,
      Comment: Comment,
    },
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
  {
    path: "/:anefe(.*)",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 