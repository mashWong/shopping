import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import details from './views/details.vue'
import active from './views/active.vue'
import join from './views/join.vue'
import follow from './views/follow.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/details/:context',
            name: 'details',
            component: details
        },
        {
            path: '/active/:id',
            name: 'active',
            component: active
        },
        {
            path: '/join',
            name: 'join',
            component: join
        },
        {
            path: '/follow',
            name: 'follow',
            component: follow
        }
    ]
})
