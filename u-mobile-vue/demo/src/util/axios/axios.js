//引入axios库
import axios from 'axios'
import router from '../../router'

//重新创建一个实例
let http = axios.create({
    baseURL:'/api'
})

//请求拦截
http.interceptors.request.use(config=>{
    //在请求头中设置token
    let userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) :{}
    config.headers.authorization = userInfo.token
    return config
})

//登录拦截
http.interceptors.response.use(res=>{
    //直接返回 res.data 确定到数据
    if(res.data.code ==403){
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('checkGoods')
        //如果token失效就返回登录页面
        router.push('/login')
           
    }
    return res.data
})

//导出http
export default http