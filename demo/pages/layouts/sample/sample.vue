<template>
    <xc-layout-sample :components="components">
        <template v-for="(component, index) in components" :slot="index">

            <xc-component-selector :key="index" :components="components" :defaultComponent="index">
                <template slot-scope="visibility">

                    <select class="xc-cl-component-selector__select" @focus="visibility.enableEditing" @blur="visibility.checkVisibility">
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
    import template from '@/modules/layouts/sample/sample.html';

    Vue.component('xc-layout-sample', {
        template: template,
        props: {
            components: Object
        }
    });

    export default {
        data: () => {
            return {
                components: {
                    'Sample': require('@/modules/components/sample/sample.html'),
                    'Sample 2': require('@/modules/components/sample2/sample2.html')
                }
            }
        },
        watch: {
            isEditing: ()=> {
                console.log(this.isEditing);
            }
        }
    };
</script>