// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import InterfazUno from '@/views/InterfazVista.vue'
import InterfazDos from '@/views/Interfaz-dos.vue'
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/interfaz-uno',
    name: 'InterfazUno',
    component: InterfazUno
  },
  {
    path: '/interfaz-dos',
    name: 'InterfazDos',
    component: InterfazDos
  },
  {
    path: '/',
    name: 'home',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
