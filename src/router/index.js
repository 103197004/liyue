import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataList from '../views/DataList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/data-list',
    name: 'DataList',
    component: DataList
  },
  {
    path: '/data-analysis',
    name: 'DataAnalysis',
    component: () => import('../views/DataAnalysis.vue') // 懒加载方式
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 