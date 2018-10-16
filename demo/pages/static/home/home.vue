<template>
    <div class="xc-cl-markdown" v-html="home"></div>
</template>

<script>
    import home from './home.md';

    export default {
        computed: {
            home() {
                return home;
            }
        }
    }

</script>
