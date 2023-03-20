import request from '@/utils/request.js'

// 向外 按需导出 API 函数
export const getUserListAPI = function () {
  return request.get('/user')
}
