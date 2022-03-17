import Vue from 'vue'
import VueRouter from 'vue-router'
import $store from '@/store';

// 路由懒加载 vue项目优化方案
// 3中方式 https://www.jianshu.com/p/876e1b85adb6
const about = () => import('../views/about.vue');
const login = () => import('../views/login.vue');
const home = () => import('../views/home.vue');
const product = () => import('../views/product.vue');
const axdatalist = () => import('../views/axdatalist.vue');
const articlemanagement = () => import('../views/articlemanagement.vue');
const notFound = () => import('../views/others/404.vue');


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    component: login,
    meta: []
  },
  {
    path: '/home',
    name: 'Home',
    component: home,
    children: [{
        path: '/',
        name: 'About',
        component: about,
        meta: []

      },
      {
        path: '/product',
        name: 'Product',
        component: product,
        meta: ['数据管理', '产品列表']
      },
      {
        path: '/axdatalist',
        name: 'Axdatalist',
        component: axdatalist,
        meta: ['数据管理', '数据列表']
      },
      {
        path: '/articlemanagement',
        name: 'Articlemanagement',
        component: articlemanagement,
        meta: ['数据管理', '文章列表']
      },
      {
        path: '/404',
        name: '页面不存在',
        component: notFound,
        meta: ['页面不存在']
      },
      {
        path: '*',
        redirect: '404'
      }
    ]
  },

]




const router = new VueRouter({
  mode:'history',
  routes
})


router.afterEach((to) => {
  // 无需展示 动态 菜单和 和面包屑
  if(to.meta.length==0)return
  // 处理跳转 子路由about 的路径问题
  console.log(to.fullPath)
  console.log(to.fullPath.length)

  let menuNavData = {
    title: to.meta.length ? to.meta[to.meta.length - 1] : '首页',
    name: to.fullPath,
    canclose: to.meta.length ? true : false,
  }
  $store.commit('addMenuNav', menuNavData)
})


export default router