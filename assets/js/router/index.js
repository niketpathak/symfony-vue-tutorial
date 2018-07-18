import Router from 'vue-router'

// components
import home from '../components/home'
import hello from '../components/hello'
import notfound from '../components/notFound'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: home
        },
        {
            path: '/hello',
            name: 'Hello',
            component: hello
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})