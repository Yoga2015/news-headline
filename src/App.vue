<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- TarBar标签栏  加上 route 就是开启路由模式 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyApp'
}
</script>

<style lang="less" scoped></style>
