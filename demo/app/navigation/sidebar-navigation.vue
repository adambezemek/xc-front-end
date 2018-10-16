<template>
    <div class="xc-cl-sidebar-nav">
        <ul class="xc-cl-sidebar-nav__list">
            <li v-for="(path, index) in paths" v-bind:key="index" class="nav-item">
                <span class="xc-cl-sidebar-nav__header" >{{ path.name.replace('/', '') }}</span>

                <ul class="xc-cl-sidebar-nav__links" v-if="path.children.length">
                    <li v-for="(child, index) in path.children" v-bind:key="index">
                        <router-link class="xc-cl-sidebar-nav__link" v-bind:to="child.path">{{ child.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import SidebarNavigationMixin from './sidebar-navigation.js';

    export default {
        mixins: [SidebarNavigationMixin],
        props: {
            pages: {
                required: true,
                type: Array
            }
        },
        computed: {
            paths: function() {
                return this.buildPaths(this.pages);
            }
        }
    }
</script>
