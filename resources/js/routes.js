import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home.vue';
import About from '@/js/components/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
});

export default router;
