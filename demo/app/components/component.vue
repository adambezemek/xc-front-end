<template>
    <section class="component">
        <h2 class="component__heading">{{ title }}</h2>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style lang="scss" scoped>
    .component {
        margin: 80px 0;

        &__heading {
            color: #898989;
            font-family: 'Montserrat', 'Arial', sans-serif;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 30px;
            letter-spacing: -.1px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 992px) {
        .component {
            margin: 40px 0;
        }
    }
</style>
