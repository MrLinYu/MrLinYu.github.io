import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/guids',
    children: [
      {
        path: '/guids',
        name: 'guids',
        component: () => import('@/views/guids/index.vue')
      }
    ]
  },
  {
    path: '/html',
    name: 'html',
    component: Home,
    redirect: '/htmlRule',
    children: [
      {
        path: '/htmlRule',
        name: 'htmlRule',
        component: () => import('@/views/front-end/html-dir/meta/index.vue')
      }
    ]
  },
  {
    path: '/css',
    name: 'css',
    component: Home,
    redirect: '/cssRule',
    children: [
      {
        path: '/cssRule',
        name: 'cssRule',
        component: () => import('@/views/front-end/css-dir/rule/index.vue')
      }
    ]
  },
  {
    path: '/js',
    name: 'js',
    component: Home,
    redirect: '/jsRule',
    children: [
      {
        path: '/jsRule',
        name: 'jsRule',
        component: () => import('@/views/front-end/js-dir/js-rule/index.vue')
      }
    ]
  },
  {
    path: '/nodejs',
    name: 'nodejs',
    component: Home,
    redirect: '/nodejsRule',
    children: [
      {
        path: '/nodejsRule',
        name: 'nodejsRule',
        component: () => import('@/views/back-end/node-dir/nodejs-rule/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
