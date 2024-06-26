import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/writenotes',
      name: 'writenotes',

      component: () => import('../views/WriteNotes.vue')
    },
    {
      path: '/test-compute',
      name: 'test-compute',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestCompute.vue')
    }
  ]
})

export default router
