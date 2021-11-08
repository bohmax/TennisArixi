<template>
  <v-card
    class="mb-2"
    width="100%"
    :color="proprieta.colorCard"
    dark
  >
    <v-card-title>{{ proprieta.text }} {{ "campo" }}</v-card-title>
    <v-card-text>
      <v-row class="px-2" v-for="(ora, index) in testo" :key="index"> 
        {{ ora }}
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import state from '@/store/index'

export default {
    name: 'daPrenotare',
    props: {
      proprieta: Object,
      campo: Object
    },
    data() {
        return {
          mese: state.getters.mese,
          weekday: state.getters.weekday,
          orari: state.getters.orari
        }
    },
    computed: {
      testo: function () {
        let ris = []

        for (const giorno in this.campo) {
          const datiGiorno = state.getters.datiGiorni(giorno)
          const sett = this.weekday[datiGiorno.sett]
          const mese = this.mese[datiGiorno.mese]
          const riga = sett + ' ' + giorno + ' ' + mese.toLowerCase()
          for (const el of this.campo[giorno]) {
            console.log(el)
            ris.push(riga + ' dalle ' + this.orari[el] + ' alle ' + this.orari[el + 1])
          }
        }
        return ris
      }
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
