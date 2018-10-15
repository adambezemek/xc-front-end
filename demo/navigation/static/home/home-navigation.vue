<template>
    <div class="c-sidebar-nav">
        <ul class="c-sidebar-nav__list">
            <li class="nav-item">
                <span class="c-sidebar-nav__header">Home</span>

                <ul class="c-sidebar-nav__links">
                    <li><a href="#" v-scroll-to="'#getting-started'" class="c-sidebar-nav__link">Getting Started</a></li>
                    <li><a href="#" v-scroll-to="'#prerequisites'" class="c-sidebar-nav__link">Prerequisites</a></li>
                    <li><a href="#" v-scroll-to="'#build-tasks'" class="c-sidebar-nav__link">Build Tasks</a></li>
                    <li><a href="#" v-scroll-to="'#common-build-errors'" class="c-sidebar-nav__link">Common Build Errors</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
