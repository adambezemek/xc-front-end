<template>
    <xc-component-sample />
</template>

<script>
    import Vue from 'vue';
    import hero from '@/modules/components/sample/sample.html';

    Vue.component('xc-component-sample', {
        template: hero
    });

    export default {};
</script>