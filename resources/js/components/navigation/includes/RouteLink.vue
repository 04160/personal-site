<template>
    <router-link tag="li" :to="link.route">
        <a href="javascript:void(0)">
        <i class="fa"
           :class="link.icon">
        </i>
        {{ link.name }}
        </a>
    </router-link>
</template>

<script>
    export default {
        name: 'RouteLink',
        props: ['link'],
    }
</script>