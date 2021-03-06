import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes= [
    {
      path: '/home',
      name: 'Home',
      meta: { pageTitle: "首页", keepAlive: true},
      component: (resolve) => require(['@/views/Home.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      meta: { pageTitle: "登录", keepAlive: true},
      component: (resolve) => require(['@/views/Login/index.vue'], resolve)
    },
    {
      path: '/Product/List',
      name: 'ProductList',
      meta: { pageTitle: "商品列表", keepAlive: true},
      component: (resolve) => require(['@/views/Product/ProductList/index.vue'], resolve)
    },
    {
      path: '/Product/Detail',
      name: 'ProductDetail',
      meta: { pageTitle: "商品详情", keepAlive: true},
      component: (resolve) => require(['@/views/Product/ProductDetail/index.vue'], resolve)
    },
    {
      path: '/Product/HomeEdit',
      name: 'ProductHomeEdit',
      meta: { pageTitle: "商品详情", keepAlive: true},
      component: (resolve) => require(['@/views/Product/HomeEdit/index.vue'], resolve)
    },
    {
      path: '/Order/List',
      name: 'OrderList',
      meta: { pageTitle: "订单列表", keepAlive: true},
      component: (resolve) => require(['@/views/Order/OrderList/index.vue'], resolve)
    },
    {
      path: '/Order/Detail',
      name: 'OrderDetail',
      meta: { pageTitle: "订单详情", keepAlive: true},
      component: (resolve) => require(['@/views/Order/OrderDetail/index.vue'], resolve)
    },
    {
      path: '/Store/List',
      name: 'StoreList',
      meta: { pageTitle: "商家列表", keepAlive: true},
      component: (resolve) => require(['@/views/Store/StoreList/index.vue'], resolve)
    },
    {
      path: '/Store/RoleManage',
      name: 'StoreRoleManage',
      meta: { pageTitle: "商家角色管理", keepAlive: true},
      component: (resolve) => require(['@/views/Store/RoleManage/index.vue'], resolve)
    },
    {
      path: '/Member/List',
      name: 'MemberList',
      meta: { pageTitle: "会员列表", keepAlive: true},
      component: (resolve) => require(['@/views/Member/List/index.vue'], resolve)
    },
  
    { // 匹配
      path: '*',
      name: 'Home',
      meta: { pageTitle: "首页" },
      component: (resolve) => require(['@/views/Home.vue'], resolve)
    }
]
const router = new Router({
  scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
          return {
              selector: to.hash
          }
      } else {
          return { x: 0, y: 0 }
      }

  },
  mode: 'hash',
  routes
});
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router;
