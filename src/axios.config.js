import axios from 'axios'

// 请求的拦截器
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('uid');
    axios.defaults.withCredentials = true;
    // 判断请求的类型
    // 如果是post请求就把默认参数拼到data里面
    // 如果是get请求就拼到params里面
    if(config.method === 'post') {
        // config.transformRequest = [function (data) {
        //     let ret = '';
        //     for (let it in data) {
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //     }
        //     return ret
        // }];
        const qs = require('qs');
        let data = qs.parse(config.data);

        config.data = qs.stringify({
            // token: token,
            // uid: uid,
            ...data
        })
    } else if(config.method === 'get') {
        config.params = {
            token: token,
            uid: uid,
            ...config.params
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.defaults.heads = {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'};