<template>
  <div class='hello' v-if="state.getters.user && state.getters.user.emailVerified">
    <v-row justify="center">
      <h1>{{ message }}</h1>
    </v-row>
    <v-row justify="center" align="center" class="mt-2 shrink">
        <v-col v-for="(campo, index) in campi" :key="index" :align="campo.align">
          <v-btn @click="selCampo(index)" :color="campo.colore" depressed :outlined="campo.show" rounded>
            {{campo.text}}
          </v-btn>
        </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-6">
        <seleziona-giorno v-show="campoSelezionato===0" @selezionato="datiGiornoSelezionato0"/>
        <seleziona-giorno v-show="campoSelezionato===1" @selezionato="datiGiornoSelezionato1"/>
    </v-row>
    <v-row justify="center" class="mt-8">
      <v-col align="center">
        <v-row
          justify="end"
          v-for="(value, proprieta, index) in prenotazioni" :key="proprieta"
          v-show="riepilogoCampi[proprieta]"
        >
          <prenotazione :proprieta="campi[index]" :campo="value"/>
        </v-row>
      </v-col>
      <v-col align="start" align-self="center">
        <v-btn
          color="success"
          v-show="mostraBtnPrenotazione"
          @click="prenotaClick"
        >
          Prenota
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <div v-else>
  <v-row justify="center">
    Per poter prenotare verifica prima l'email, puoi chiedere nuovamente un account di verifica nella sezione account
  </v-row>
  </div>
</template>

<script>
import selezionaGiorno from '@/components/Prenota/selezionaGiorno'
import daPrenotare from '@/components/Prenota/daPrenotare'
import state from '@/store/index'

export default {
    name: 'HelloWorld',
    data() {
      return {
          message: "Prenota il campo",
          campi: [ { text: "Vecchio", colore: "primary", show: true, colorCard: "green", align: 'end' }, { text: "Nuovo", colore: "primary", show: true, colorCard: "#1F7087", align: 'start' }],
          campoSelezionato: null,
          riepilogoCampi: {},
          mostraBtnPrenotazione: false,
          state
      }
    },
    components: {
      'seleziona-giorno': selezionaGiorno,
      'prenotazione': daPrenotare
    },
    watch: {
      prenotazioni: {
        deep: true,
        handler: function () {
          this.mostraBtnPrenotazione = false
          for (const campo in this.prenotazioni) {
            this.riepilogoCampi[campo] = false
            for (const val in this.prenotazioni[campo]) {
              const arr = this.prenotazioni[campo][val]
              if (arr && arr.length > 0) {
                this.riepilogoCampi[campo] = true
                break
              }
            }
            this.mostraBtnPrenotazione = this.mostraBtnPrenotazione || this.riepilogoCampi[campo]
          }
        }
      }
    },
    computed: {
      prenotazioni: function () {
        return state.getters.prenotazioni
      },
    },
    methods: {
      selCampo: function (index) {
        if (this.campoSelezionato !== null) {
          this.campi[this.campoSelezionato].show = true
        }
        this.campoSelezionato = index
        this.campi[this.campoSelezionato].show = false
      },
      datiGiornoSelezionato0: function (items) {
        items.campo = 1
        state.commit('addPrenotazione', items)
      },
      datiGiornoSelezionato1: function (items) {
        items.campo = 2
        state.commit('addPrenotazione', items)
      },
      prenotaClick: function () {
        console.log('Prenotato')
      },
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
