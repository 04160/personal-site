<template>
    <ul class="navbar">
        <route-link
                v-for="link in links"
                v-bind:key="link.id"
                v-bind:link="link"
        ></route-link>
    </ul>
</template>

<script>
    import RouteLink from '@/js/components/navigation/includes/RouteLink.vue';

    let links = [
        {
            'id': 1,
            'icon': 'fa-home',
            'name': 'Home',
            'route': '/'
        },
        {
            'id': 2,
            'icon': 'fa-user',
            'name': 'About',
            'route': '/about'
        },
        {
            'id': 3,
            'icon': 'fa-profile',
            'name': 'Login',
            'route': '/login'
        },
    ];

    export default {
        name: 'App',
        data: function () {
            return {
                links: links
            };
        },
        components: {
            RouteLink
        }
    }
</script>
