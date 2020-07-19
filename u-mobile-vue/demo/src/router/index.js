import Vue from 'vue'
import Router from 'vue-router'
// //一级路由组件
// import Index from '@/components/pages/index'
// import GoodsList from '@/components/pages/goodsList'
// import GoodsDetail from '@/components/pages/goodsDetail'
// import Login from '@/components/pages/login'
// //二级路由组件
// import Home from '@/components/views/home'
// import Search from '@/components/views/search'
// import Car from '@/components/views/car'
// import Pay from '@/components/views/pay'
// import Mine from '@/components/views/mine'

Vue.use(Router)

const r = new Router({
  routes: [
    {
      path: '/index',
      component:()=>import('@/components/pages/index'),
      children:[
        {
          path:"/home",
          component:()=>import('@/components/views/home')
        },
        {
          path:"/search",
          component:()=>import('@/components/views/search')
        },
        {
          path:"/car",
          component:()=>import('@/components/views/car')
        },
        {
          path:"/pay",
          component:()=>import('@/components/views/pay')
        },
        {
          path:"/mine",
          component:()=>import('@/components/views/mine')
        },       
         {
          path:"",
          redirect:"/home"
        }
      ]
    },
    {
      path: '/goodsList',
      component: ()=>import('@/components/pages/goodsList')
    },
    {
      path: '/goodsDetail',
      component:()=>import('@/components/pages/goodsDetail')
    },
    {
      path: '/login',
      component:()=>import('@/components/pages/login')
    },
    {//重定向
      path:'*',
      redirect:'/index'
    }
  ]
})
r.beforeEach((to,from,next)=>{
  //当我们没有写next的时候，就被拦截
  //逻辑判断 如果你跳转的地址是登录就next,否则我就强制跳转到登录
 // next()
 if(to.path=='/login'){
     next()
     return
 }
 //判断当前账号是否登录，如果登录，就next，否则就依然是去登录页
 let isLogin = sessionStorage.getItem('isLogin')
 if(isLogin){
     next()
     return
  }
 next('/login')
})



export default r