import { CreateDynamicNavigation } from 'demo/app/navigation/navigation.js';

import SampleComponent from 'demo/pages/components/sample.vue';

const ComponentPages = CreateDynamicNavigation([
    {
        path: '/components',
        children: [
            {
                path: '',
                excludeFromNav: true,
                redirect: 'sample'
            },
            {
                path: 'sample',
                name: 'Sample Component',
                component: SampleComponent
            }
        ]
    }
]);

export default ComponentPages;
