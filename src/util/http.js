import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create({
  baseURL: 'https://m.maizuo.com', // 共用的域名
  timeout: 10000, // 超过这个时间报错
  headers: { // 固定的headers
    'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16174648662371552091832321","bc":"310100"}'
  }
})

// axios拦截器
// http.interceptors.request//发送请求之前做的事情
// http.interceptors.response接受数据之前做的事情

http.interceptors.request.use(function (config) {
  // 拦截之前做一个加载提示
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止点击背景
    overlay: true, // 背景遮罩层
    duration: 0 // 展示时间 在请求完axios关闭这个提示 Toast.clear()
  })
  return config
}, function (error) {
  return error
}
)
http.interceptors.response.use(function (config) {
  // 返回数据之前加载
  // 把提示给关闭
  Toast.clear()
  return config
}, function (error) {
  return error
})

// 导出
export default http
