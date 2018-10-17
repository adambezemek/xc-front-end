<template>
    <xc-layout-sample :components="componentMap">
        <template v-for="(component, index) in componentMap" :slot="index">
            <xc-component-selector :key="index" :components="allowedComponents" :defaultComponent="component" />
        </template>
    </xc-layout-sample>
</template>

<script>
    import Vue from 'vue';
    import template from '@/modules/layouts/sample/sample.html';

    let components = {
        'Sample': require('@/modules/components/sample/sample.html'),
        'Sample 2': require('@/modules/components/sample2/sample2.html')
    };

    Vue.component('xc-layout-sample', {
        template: template,
        props: {
            components: Object
        }
    });

    export default {
        data: () => {
            return {
                allowedComponents: components,
                componentMap: {
                    slot1: 'Sample',
                    slot2: 'Sample 2'
                }
            }
        }
    };
</script>