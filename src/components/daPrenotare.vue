<template>
  <v-card
    class="mb-2"
    width="100%"
    :color="proprieta.colorCard"
    dark
  >
    <v-card-title>{{ proprieta.text }}</v-card-title>
    <v-card-text>{{ campo }} </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: 'daPrenotare',
    props: {
      proprieta: Object,
      campo: Object
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
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
