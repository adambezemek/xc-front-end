<template>
    <div class="xc-cl-component-selector" @mouseover="checkVisibility" @mouseleave="checkVisibility">
        <transition name="fade">
            <div class="xc-cl-component-selector__controls" v-if="isVisible">
                <label class="xc-cl-component-selector__label">Select Component:</label>
                <slot :enableEditing="enableEditing" :checkVisibility="checkVisibility" :classDef="'xc-cl-component-selector__select'"></slot>
            </div>
        </transition>
        <div class="xc-cl-component-selector__wrapper" v-html="template"></div>
    </div>
</template>

<script>
    export default {
        props: {
            template: String
        },
        data: () => {
            return {
                isVisible: false,
                isHover: false,
                isEditing: false
            }
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
            },
            enableEditing() {
                this.isEditing = true;
            }
        }
    }
</script>