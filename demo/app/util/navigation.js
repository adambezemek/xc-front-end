import SidebarNavigation from '../navigation/sidebar-navigation.vue';

export function CreateDynamicNavigation(routes) {
    if(typeof routes !== 'undefined') {
        routes[0].components = {
            default: {
                template: '<router-view></router-view>'
            },
            'sidebar-nav': SidebarNavigation
        };

        routes[0].props = {
            'sidebar-nav': {
                pages: routes
            }
        };
    }

    return routes;
}
