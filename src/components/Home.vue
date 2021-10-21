<template>
  <div class='hello'>
    <h1>{{ message }}</h1>
    <v-row justify="center" align="center" class="mt-2 shrink">
      <v-spacer></v-spacer>
      <div v-for="(campo, index) in campi" :key="index">
        <v-col :align-self="campo.align">
          <v-btn @click="selCampo(index)" :color="campo.colore" depressed :outlined="campo.show" rounded>
            {{campo.text}}
          </v-btn>
        </v-col>
      </div>
      <v-spacer></v-spacer>
    </v-row>
    <v-row justify="center" align="center" class="mt-6">
        <v-spacer></v-spacer>
        <seleziona-giorno v-show="campoSelezionato===0"/>
        <seleziona-giorno v-show="campoSelezionato===1"/>
        <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
import selezionaGiorno from '@/components/selezionaGiorno'

export default {
    name: 'HelloWorld',
    data() {
      return {
          message: "Prenota il campo",
          campi: [ { text: "Vecchio", colore: "primary", show: true }, { text: "Nuovo", colore: "primary", show: true }],
          campoSelezionato: null
      }
    },
    components: {
      'seleziona-giorno': selezionaGiorno
    },
    mounted () {
    },
    methods: {
      selCampo: function (index) {
        if (this.campoSelezionato !== null) {
          this.campi[this.campoSelezionato].show = true
        }
        this.campoSelezionato = index
        this.campi[this.campoSelezionato].show = false
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
