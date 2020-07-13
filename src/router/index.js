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
        path: 'dashbord',
        component: () => import('@/views/Dashbord')
      },
      {
        path: 'users',
        component: () => import('@/views/Users')
      },
      {
        path: 'rights',
        component: () => import('@/views/Rights/rights')
      },
      {
        path: 'roles',
        component: () => import('@/views/Rights/roles')
      },
      {
        path: 'goods',
        component: () => import('@/views/Goods/goods')
      },
      {
        path: 'params',
        component: () => import('@/views/Goods/params')
      },
      {
        path: 'categories',
        component: () => import('@/views/Goods/categories')
      },
      {
        path: 'orders',
        component: () => import('@/views/Orders/orders')
      },
      {
        path: 'Reports',
        component: () => import('@/views/Reports/reports')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

// 用户没有登录时拦截无法访问系统内部界面
router.beforeEach((to, from, next) => {
  if(to.path == '/login'){
    next()
  }else{
    if(localStorage.getItem('zxg-cms-token')){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
