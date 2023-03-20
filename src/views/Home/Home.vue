<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="新闻头条" fixed />

    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="false">
      <!-- 上拉刷新 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- 导入 注册 ，并使用 ArticleInfo组件 -->
        <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name"
          :comm_count="item.comm_count" :time="item.pubdate" :cover="item.cover">
        </ArticleInfo>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
// 导入需要的组件
// import request from '@/utils/request.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

// 按需导入 API接口
import { getArticleListAPI } from '@/api/articleAPI.js'

// lodash 提供了许多牛逼的函数：节流的函数、防抖的函数、操作数组的一系列函数、
// 操作对象的一系列函数（对象的深拷贝、浅拷贝）
import _ from 'lodash'
let fn = null

export default {
  name: 'MyHome',
  components: {
    ArticleInfo
  },
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章数组   默认为空
      artlist: [],
      // 是否正在加载下一页数据，如果 loading 为 true，则不会反复触发load事件，
      // 每当下一页数据请求回来之后，千万要记得，把 loading 从 true 改为 false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished 改成 true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  // 切换路由回来时，此时页面激活时
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  // 切换路由时，此时页面被缓存
  deactivated() {
    window.removeEventListener('scroll', fn)
  },
  methods: {
    // 封装获取文章列表的数据
    async initArticleList(isRefresh) {
      // aixos 发起 GET请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (isRefresh) {
        // isRefresh = true 就是 下拉刷新，新数据在前，旧数据在后，即 头部追加
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        // isRefresh = false 就是  上拉刷新，旧数据在前，新数据在后，即 尾部追加
        // 如果上拉加载更多，那么应该是：
        // this.artlist = [旧数据在前，新数据在后]
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        // 证明没有下一页数据了，直接把 finished 改为 true, 表示 数据加载完了
        this.finished = true
      }
    },
    // 上拉刷新 onload 被调用，就应该请求下一页数据
    onLoad() {
      // console.log('触发了load事件')
      // 让页码值+1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新的处理函数
    onRefresh() {
      // console.log('触发了下拉刷新')
      // 让页码值 + 1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList(true)
    },
    recordTopHandler() {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  // .van-nav-bar {
  //   background-color: #00c3ff;
  // }

  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>
