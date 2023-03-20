import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 导入并安装Vant组件库
import Vant from 'vant'
// 为了能够 覆盖默认的less变量，重新定制主题
// 一定要把 index.css 后缀名改为.less
import 'vant/lib/index.less'

// 使用Vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
