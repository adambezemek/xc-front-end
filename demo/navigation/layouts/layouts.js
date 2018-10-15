import { CreateDynamicNavigation } from 'demo/app/util/navigation';

import SampleLayout from 'demo/pages/layouts/sample.vue';

const LayoutPages = CreateDynamicNavigation([
    {
        path: '/layouts',
        children: [
            {
                path: '',
                excludeFromNav: true,
                redirect: 'sample'
            },
            {
                path: 'sample',
                name: 'Sample Layout',
                component: SampleLayout
            }
        ]
    }
]);

export default LayoutPages;
