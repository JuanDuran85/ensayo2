import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import('../views/Favoritos.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue')
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: () => import('../views/Opiniones.vue')
  },
  {
    path: '/editar/:index',
    name: 'Editar',
    component: () => import('../views/Editar.vue')
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/Error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
