<template>
    <div class="xc-cl-component-selector" @mouseover="checkVisibility" @mouseleave="checkVisibility">
        <transition name="fade">
            <div class="xc-cl-component-selector__controls" v-if="isVisible">
                <label class="xc-cl-component-selector__label" for="componentSelect">Select Component:</label>
                <select class="xc-cl-component-selector__select" v-model="template" id="componentSelect" @focus="isEditing = true" @blur="checkVisibility">
                    <option v-for="(component, index) in components" :value="index" :key="index">
                        {{ index }}
                    </option>
                </select>
            </div>
        </transition>
        <div class="xc-cl-component-selector__wrapper" v-html="components[template]"></div>
    </div>
</template>

<script>
    export default {
        props: {
            defaultComponent: String,
            components: Object
        },
        data: () => {
            return {
                template: '',
                isVisible: false,
                isHover: false,
                isEditing: false
            }
        },
        created: function() {
            this.template = this.defaultComponent;
        },
        methods: {
            checkVisibility(e) {
                if(e.type === 'mouseover') {
                    this.isHover = true;
                    this.isVisible = true;
                } else {
                    if(e.type === 'mouseleave') {
                        this.isHover = false;
                    } else if(e.type === 'blur') {
                        this.isEditing = false;
                    }
                    if(!this.isHover && !this.isEditing) {
                        this.isVisible = false;
                    }
                }
            }
        }
    }
</script>