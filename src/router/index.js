import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 这种写法所有组件在项目启动后都会一次性下载回来，会让项目启动时速度特别慢，造成首页白屏效果。
// import Login from '@/views/Login/Login'

// component: () => import('@/views/Login/Login')
// 这种写法叫做路由懒加载，就是访问到了这个路由时才会去加载这个组件

const routes = [
  {
    path: '/login',
    // component: () => import('@/views/Login/Login')
    component: function () {
      return import('@/views/Login/Login')
    }
  },
  // 嵌套路由
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/dashbord',
    children: [
      {
        path:'/dashbord',
        component:()=>import('@/views/Dashbord')
      },
      {
        path: 'users',
        component: () => import('@/views/Users')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
