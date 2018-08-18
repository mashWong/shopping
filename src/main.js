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

// Vue.prototype.uId = "546548465456";
axios.get('permissionsUsers/login/getSignatures')
    .then((response) => {
        if(response.data.data.id){
            // alert("登陆成功"+response.data.data.id);
            Vue.prototype.uId = response.data.data.id;
        } else {
            alert("登陆失败" + response.data.data.id)
        }
    })
    .catch(function(err){
        alert("登陆失败" + err)
    });
