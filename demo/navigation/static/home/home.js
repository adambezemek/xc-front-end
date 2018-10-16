import HomeNavigation from './home-navigation.vue';

import Home from 'demo/pages/static/home/home.vue';

const HomePages = [
    {
        path: '/',
        components: {
            default: {
                template: '<router-view></router-view>'
            },
            'sidebar-nav': HomeNavigation
        },
        children: [
            {
                path: '',
                component: Home
            }
        ]
    }
];

export default HomePages;
