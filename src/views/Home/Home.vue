<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="新闻头条" fixed />
    <!-- 主体内容 -->
  </div>
</template>

<script>
export default {
  name: 'MyHome'
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  .van-nav-bar {
    background-color: #00c3ff;
  }

  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>
