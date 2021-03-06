import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/lista-docentes',
    name:'lista-docentes',
    component: () => import('@/lista-docentes/pages/lista-docentes')
  },
  {
    path:'/ads',
    name:'ads',
    component: () => import('@/ads/pages/ads')
  },
  {
    path:'/list-courses',
    name:'list-courses',
    component: () => import('@/list-courses/pages/list-courses')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
