// 1、导入 vue 、vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 3.2、导入路由规则中需要的组件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 2、把VueRouter 安装为 vue 插件
Vue.use(VueRouter)

// 3.1、路由规则的数组
const routes = [
  // 定义首页路由规则
  { path: '/', component: Home, meta: { isRecord: true, top: 0 } },
  // 定义我的路由规则
  { path: '/user', component: User }
]

// 3、创建 路由实例对象
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // to:要进入的目标路由对象，到哪里去
    // console.log(to)
    // from:离开的路由对象，从哪儿来
    // console.log(from)
    // savedPosition : 会记录滚动条的坐标，点击 “后退/前进” 时的记录值（x:?y:?）
    // console.log(savendPosition);
    // return 期望滚动到哪个位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

// 4、向外共享 路由实例对象
export default router
