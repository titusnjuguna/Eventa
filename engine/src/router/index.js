import { createRouter, createWebHashHistory} from "vue-router"
import EventList from '../views/EventList.vue'
import EventCreate from '../views/EventCreate.vue'
import EventShow from '../views/EventShow.vue'
import User from '../views/User.vue'


const routes = [
  {
    path: "/",
    name: "eventList",
    component: EventList,
  },
  {
    path: "/event-show/:id",
    name: "eventShow",
    component: EventShow,
    props: true,
   
  },
  {
    path: "/event-create",
    name: "eventCreate",
    component: EventCreate,
   
  },
  {
    path: "/profile/:username",
    name: "profile",
    component: User,
    props: true,
   
  },
  {
    path: '/about',
    name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
];

const router = createRouter({
  
  history: createWebHashHistory(),
  routes,
});

export default router;
