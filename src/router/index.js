import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Dashboard from '@/components/Dashboard'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Form',
            component: Form
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
})
