<template>
    <xc-layout-sample :components="components" :componentMap="componentMap">
        <template v-for="(component, index) in componentMap" :slot="index">

            <xc-component-selector :key="index" :template="components[componentMap[index]]">
                <template slot-scope="visibility">

                    <select :class="visibility.classDef" @focus="visibility.enableEditing" @blur="visibility.checkVisibility" v-model="componentMap[index]">
                        <option v-for="(component, index) in components" :value="index" :key="index">
                            {{ index }}
                        </option>
                    </select>

                </template>
            </xc-component-selector>

        </template>
    </xc-layout-sample>
</template>

<script>
    import Vue from 'vue';
    import template from '@/markup/layouts/sample/sample.html';

    Vue.component('xc-layout-sample', {
        template: template,
        props: {
            components: Object,
            componentMap: Object
        }
    });

    export default {
        data: () => {
            return {
                components: {
                    'Sample': require('@/markup/components/sample/sample.html'),
                    'Card': require('@/markup/components/card/card.html')
                },
                componentMap: {
                    slot1: 'Sample',
                    slot2: 'Card'
                }
            }
        }
    };
</script>