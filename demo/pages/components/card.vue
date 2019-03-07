<template>
    <div v-html="template">
    </div>
</template>

<script>
    import card from '@/markup/components/card/card.html';

    export default {
        data: () => {
            return {
                template: card
            }
        }
    };
</script>