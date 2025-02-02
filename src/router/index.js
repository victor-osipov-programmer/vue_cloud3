import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import FilesPage from '@/pages/FilesPage.vue'
import UploadPage from '@/pages/UploadPage.vue'
import EditPage from '@/pages/EditPage.vue'
import SharedPage from '@/pages/SharedPage.vue'
import RightsPage from '@/pages/RightsPage.vue'

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
  {
    path: '/edit',
    name: 'edit',
    component: EditPage
  },
  {
    path: '/shared',
    name: 'shared',
    component: SharedPage
  },
  {
    path: '/rights',
    name: 'rights',
    component: RightsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
