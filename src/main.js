import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import axiosConfig from './axios.config'
import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false;
Vue.use(vueAxios, axios);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

Vue.prototype.uId = "546548465456";
axios.get('login/dynamic?url=' + window.location.href)
    .then((response) => {
        if(response.data){
            Vue.prototype.uId = "546548465456";
        } else {
            alert("登陆失败")
        }
    })
    .catch(function(err){
        alert("登陆失败" + err)
    });
