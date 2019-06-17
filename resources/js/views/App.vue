<template>
    <div class="site-wrap">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue';
    import NavBar from '@/js/components/navigation/NavBar.vue';

    export default {
        name: 'App',
        components: {
            NavBar
        }
    }
</script>
