import HomeNavigation from 'demo/navigation/static/home/home-navigation.vue';

import Home from 'demo/pages/static/home.vue';

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
