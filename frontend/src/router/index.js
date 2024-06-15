import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path:'/view/:id',
      name:'detailView',
      component:()=>import('../views/viewsMenu.vue')
    },
    {
      path:'/edit/:id',
      name:'editData',
      component:()=>import('../views/edit.vue')
    },
    {
      path:'/newData',
      name:' newData',
      component:()=>import('../views/newData.vue')
    }
  ]
})

export default router
