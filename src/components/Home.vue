<template>
  <div class='hello'>
    <h1>{{ message }}</h1>
    <v-row justify="center" align="center" class="mt-4">
        <v-spacer></v-spacer>
        <v-col align="right">
            <v-btn depressed color="primary" @click="dietroData" :disabled="!boolMinore">
                {{ minore }}
            </v-btn>
        </v-col>
        <v-col align="center">
            {{ giorno }}
        </v-col>
        <v-col align="left">
            <v-btn depressed color="primary" @click="avanzaData" :disabled="!boolMaggiore">
                {{ maggiore }}
            </v-btn>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                message: "Prenota il campo",
                minore: "<",
                maggiore: ">",
                contatore: 0
            }
        },
        computed: {
            giorno: function () {
                const date = new Date()
                date.setDate(date.getDate() + this.contatore)
                return date.toLocaleString("it-IT", { year: "numeric", month: "numeric", day: "numeric" })
            },
            boolMaggiore: function () {
                return this.contatore < 10
            },
            boolMinore: function () {
                return this.contatore > 0
            }
        },
        methods: {
            avanzaData: function () {
                this.boolMaggiore && this.contatore++
            },
            dietroData: function () {
                this.boolMinore && this.contatore--
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
