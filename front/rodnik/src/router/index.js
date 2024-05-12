import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'mainLogin',
    // meta:{layout:'empty'},
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    // meta:{layout:'empty'},
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    // meta:{layout:'empty'},
    component: () => import('../views/ActivitiesView.vue')
  },
  {
    path: '/abonements',
    name: 'abonements',
    // meta:{layout:'empty'},
    component: () => import('../views/AbonementsView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // meta:{layout:'empty'},
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/add_abonement',
    name: 'profile',
    // meta:{layout:'empty'},
    component: () => import('../views/AddAbonementView.vue')
  },
  {
    path: '/test',
    name: 'test',
    // meta:{layout:'empty'},
    component: () => import('../views/testVuew.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
