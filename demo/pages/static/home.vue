<template>
    <div class="container container-fluid">
        <div class="c-markdown" v-html="home"></div>
    </div>
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
