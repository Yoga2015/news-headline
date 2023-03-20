import request from '@/utils/request.js'

// 文章相关的API接口，都封装到这个模块中

// 向外按需导出一个 API 函数 ，export 属于 按需导出
export const getArticleListAPI = function(_page, _limit) {
  // aixos 发起 GET请求，获取文章的列表数据
  return request.get('/articles', {
    // Get请求的参数
    params: {
      _page: _page,
      _limit: _limit
    }
  })
}
