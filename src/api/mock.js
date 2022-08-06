//二次封装axios
import axios from 'axios';
//进度条 start 进度条开始 done jie'hsu
import nprogress from 'nprogress';
//引入进度条的样式
import 'nprogress/nprogress.css'   


//create 创建一个axios实例
const requests = axios.create({
  //配置
  baseURL: '/mock',//基础路径
  timeout: 5000,//超时时间
})
requests.interceptors.request.use((config) => {
  //config  headers请求头
  //
  nprogress.start();
  return config
}, (error) => {
  return Promise.reject(error)
});
requests.interceptors.response.use((res) => {
  //数据
  nprogress.done();

  return res.data
}, (error) => {
  return Promise.reject(error);
})
export default requests;
