<template>
    <div class="xc-cl-component-selector">
        <div class="xc-cl-component-selector__controls">
            <label for=""></label>
            <select v-model="template">
                <option v-for="(component, index) in components" :value="index" :key="index">
                    {{ index }}
                </option>
            </select>
        </div>
        <div class="xc-cl-component-selector__wrapper" v-html="components[template]"></div>
    </div>
</template>

<style lang="scss">
    .xc-cl-component-selector {
        overflow: hidden;

        &__wrapper {
            overflow: hidden;
        }
    }
</style>

<script>
    export default {
        props: {
            defaultComponent: String,
            components: Object
        },
        data: () => {
            return {
                template: ''
            }
        },
        created: function() {
            this.template = this.defaultComponent;
        }
    }
</script>