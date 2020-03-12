import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'mainPage',
    component: () => import('@/views/main-page'),
    children:[
      { 
        path: 'mainhome',
        name: 'mainHome',
        component: () => import('@/components/common/main-home')
      },
      { 
        path: 'system/adduser',
        name: 'addUser',
        component: () => import('@/components/user/add-user')
      },
      { 
        path: 'system/userlist',
        name: 'userList',
        component: () => import('@/components/user/user-list')
      }
    ]
    
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
