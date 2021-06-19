import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: '/courses/list',
        name: 'CoursesList',
        component: () => import('@/views/courses/CoursesList.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
