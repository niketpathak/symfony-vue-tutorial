<template>
    <div id="vueApp">
        <div id="container">
            <div id="welcome">
                <h1>Home Page</h1>
            </div>
            <div id="status">
                <p>
                    You are now in <b>Home vue route</b>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    #status p {
        color: green;
    }
</style>