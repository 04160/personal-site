import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home.vue';
import About from '@/js/components/About.vue';
import Login from '@/js/views/Auth/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                public: true,
            }

        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                public: true
            }
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                private: true,
            }
        }
    ]
});

export default router;
