// 1、导入 vue 、vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 2、把VueRouter 安装为 vue 插件
Vue.use(VueRouter)

// 3.1、路由规则的数组
const routes = [
  // 定义首页路由规则
  { path: '/', component: Home },
  // 定义我的路由规则
  { path: '/user', component: User }
]

// 3、创建 路由实例对象
const router = new VueRouter({
  routes
})

// 5、向外共享 路由实例对象
export default router
