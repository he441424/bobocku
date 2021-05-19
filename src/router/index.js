import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import infor from '../views/infor.vue'
import my from '../views/my.vue'

// import coming from '../views/home/coming.vue'
import now from '../views/home/now.vue'
import login from '../views/login.vue'
import city from '../views/city.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/cinema',
    component: () => import('../views/cinema.vue')
  },
  {
    path: '/cinema/search',
    component: () => import('../views/search.vue')
  },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: '/home/coming',
        component: () => import('../views/home/coming.vue')
      },
      {
        path: '/home/now',
        component: now
      },
      {
        path: '',
        redirect: '/home/now'
      }
    ]
  },
  {
    path: '/infor',
    component: infor
  },

  {
    path: '/my',
    component: my
  },
  {
    path: '/data/:myid', // 动态路由
    component: () => import('../views/data.vue')
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/city',
    component: city
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({

  routes
})

export default router
