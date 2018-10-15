<template>
    <xc-sample></xc-sample>
</template>

<script>
    import Vue from 'vue';
    import hero from '@/markup/components/sample/sample.html';

    Vue.component('xc-sample', {
        template: hero
    });

    export default {};
</script>