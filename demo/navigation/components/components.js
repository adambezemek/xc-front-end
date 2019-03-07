import { CreateDynamicNavigation } from 'demo/app/navigation/navigation.js';

import SampleComponent from 'demo/pages/components/sample.vue';
import CardComponent from 'demo/pages/components/card.vue';

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
            },
            {
                path: 'card',
                name: 'Card Component',
                component: CardComponent
            }

        ]
    }
]);

export default ComponentPages;
