<template>
  <div>
    <v-row justify="center" align="center" class="mx-2">
        <v-col align="center" max-width="64" v-for="(el, index) in giorni"
        :key="index">
            <v-card @click="seleziona(index)" :color="el.colore" class="px-1" max-width="64" min-width="64">
                <v-card-text>
                    <v-row justify="center">
                        {{ weekday[el.sett] }}
                    </v-row>
                    <v-row justify="center">
                        <strong>
                            {{ el.giorno }}
                        </strong>
                    </v-row>
                    <v-row justify="center">
                        {{ mese[el.mese] }}
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <seleziona-ora v-show="giornoSelezionato" @orarioSelezionato="orarioSelezionato" :selezionato="selezionato" :maxGiorno="maxGiorni" />
  </div>
</template>

<script>
import store from '@/store/index'
import selezionaOra from '@/components/Prenota/selezionaOra'

export default {
    name: 'selezionaGiorno',
    data() {
        return {
            giorni: [],
            maxGiorni: 10,
            mese: store.getters.mese,
            weekday: store.getters.weekday,
            selezionato: 0,
            giornoSelezionato: false
        }
    },
    components: {
        'seleziona-ora': selezionaOra
    },
    mounted() {
        this.calcolaGiorni()
    },
    methods: {
        calcolaGiorni: function () {
            const date = new Date()
            date.setDate(date.getDate() - 1)
            for (let x = 0; x < this.maxGiorni; x++) {
                date.setDate(date.getDate() + 1)
                const obj = { mese: date.getMonth(), sett: date.getDay(), giorno: date.getDate(), colore: "white" }
                this.giorni.push(obj)
            }
        },
        seleziona: function (index) {
            this.giorni[this.selezionato].colore = undefined
            this.selezionato = index
            this.giorni[this.selezionato].colore = "blue lighten-2"
            this.giornoSelezionato = true
        },
        orarioSelezionato: function (items) {
            this.$emit('selezionato', { giorno: this.giorni[this.selezionato], orari: items })
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
