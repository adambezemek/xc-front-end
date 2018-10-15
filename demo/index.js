import 'core-js/shim';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app/app.vue';
import routes from './navigation/index.js';

import '@/styles/styles.scss';
import '@/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

let appInitialized = false;

router.afterEach((to, from) => {
    if(!appInitialized) {
        appInitialized = true;
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});
