<template>
    <div v-html="template">
    </div>
</template>

<script>
    import sample from '@/modules/components/sample/sample.html';

    export default {
        data: () => {
            return {
                template: sample
            }
        }
    };
</script>