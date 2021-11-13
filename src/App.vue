<template>
    <div id='app'>
        <v-app>
            <v-row justify="center" class="mt-4">
                <log-status />
            </v-row>
            <v-row justify="center" align="center" class="shrink my-4">
                <v-img alt='Vue logo' contain src="./assets/logo.png" width="128" height="128" aspect-ratio="1"/>
            </v-row>
            <Home />
        </v-app>
    </div>
</template>

<script>
import LogStatus from './components/logStatus.vue'
import Home from './views/Home'

export default {
    name: 'App',
    components: {
        Home,
        'log-status': LogStatus
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