<template>
    <div v-html="template">
    </div>
</template>

<script>
    import sample from '@/markup/components/sample/sample.html';

    export default {
        data: () => {
            return {
                template: sample
            }
        }
    };
</script>