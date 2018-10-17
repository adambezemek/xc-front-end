<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="dark" class="xc-cl-header sticky-top">
            <b-navbar-toggle class="xc-cl-header__toggle" target="nav_collapse">
                <span class="xc-cl-header__bar"></span>
                <span class="xc-cl-header__bar"></span>
                <span class="xc-cl-header__bar"></span>
            </b-navbar-toggle>

            <b-navbar-toggle class="xc-cl-header__toggle xc-cl-header__toggle--desktop" target="sidebar_collapse">
                <span class="xc-cl-header__bar"></span>
                <span class="xc-cl-header__bar"></span>
                <span class="xc-cl-header__bar"></span>
            </b-navbar-toggle>

            <b-navbar-brand class="xc-cl-header__logo" v-bind:to="'/'">XC Component Library</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse" class="xc-cl-navbar__container">
                <b-navbar-nav class="xc-cl-navbar ml-auto">
                    <li class="xc-cl-navbar__item">
                        <router-link class="xc-cl-navbar__link c-cta h-color--white" v-bind:to="'/'" exact>Home</router-link>
                    </li>

                    <li class="xc-cl-navbar__item">
                        <router-link class="xc-cl-navbar__link c-cta h-color--white" v-bind:to="'/layouts'">Layouts</router-link>
                    </li>

                    <li class="xc-cl-navbar__item">
                        <router-link class="xc-cl-navbar__link c-cta h-color--white" v-bind:to="'/components'">Components</router-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="xc-cl-app">
            <b-collapse visible class="xc-cl-app__sidebar" id="sidebar_collapse">
                <router-view name="sidebar-nav"></router-view>
            </b-collapse>
            <main class="xc-cl-app__content">
                <router-view></router-view>
            </main>
        </div>

        <!-- This is needed to ensure a modal keyboard trap -->
        <span tabindex="0"></span>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';
    import VueScrollTo from 'vue-scrollto';
    
    import SidebarNavigation from './navigation/sidebar-navigation.vue';
    import ComponentSelector from './component-selector/component-selector.vue';
    
    import './styles/styles.scss';

    Vue.use(BootstrapVue);
    Vue.use(VueScrollTo);

    Vue.component('xc-component-selector', ComponentSelector);

    export default {
        name: 'app'
    }
</script>