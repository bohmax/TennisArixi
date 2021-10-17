<template>
    <div id='app'>
        <v-app>
            <v-row justify="center" align="center" class="shrink my-4">
                <v-img alt='Vue logo' contain src="./assets/logo.png" width="128" height="128" aspect-ratio="1"/>
            </v-row>
            <Home />
        </v-app>
    </div>
</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'App',
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    margintop {
        margin-top: 10px;
    }
</style>