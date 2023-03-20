import axios from 'axios'

const request = axios.create({
  // 指定请求的根路径
  baseURL: 'https://www.escook.cn'
})

// 默认导出  向外共享 axios 实例对象
export default request
