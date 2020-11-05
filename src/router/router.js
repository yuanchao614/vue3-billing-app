
import { createRouter, createWebHistory } from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
import Layout from '../components/index.vue'

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('../views/home/index'),
      }]
    },
  ]
})
 
export default router