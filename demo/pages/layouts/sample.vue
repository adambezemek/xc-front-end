<template>
    <xc-layout-sample />
</template>

<script>
    import Vue from 'vue';
    import sample from '@/modules/layouts/sample/sample.js';

    Vue.component('xc-layout-sample', {
        template: sample
    });

    export default {};
</script>