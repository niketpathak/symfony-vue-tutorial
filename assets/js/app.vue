<template>
    <div class="container">
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <h1>Getting started with Symfony + VueJS</h1>
            </div>
            <div id="vue-menu" class="navbar-menu">
                <div class="navbar-start">
                    <router-link tag='div' to="/" class="navbar-item">Home</router-link>
                    <router-link tag='div' to="hello" class="navbar-item">Hello</router-link>
                    <router-link tag='div' to="notfound" class="navbar-item">Not Found URL</router-link>
                </div>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style>
    .container .navbar-item {
        cursor: pointer;
        text-decoration: underline;
    }

    h1 {
        color:blue;
    }
</style>