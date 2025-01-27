import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import FilesPage from '@/pages/FilesPage.vue'
import UploadPage from '@/pages/UploadPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'register' }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/files',
    name: 'files',
    component: FilesPage
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
