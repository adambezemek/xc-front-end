<template>
<div>
    <xc-component-sample />
    </div>
</template>

<script>
    import Vue from 'vue';
    import sample from '@/modules/components/sample/sample.html';

    Vue.component('xc-component-sample', {
        template: sample
    });

    export default {};
</script>