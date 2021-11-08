<template>
<div class="pa-4">
    <v-chip-group
        v-model="selezionati[selezionato]"
        active-class="primary--text"
        column
        multiple
    >
    <v-chip
        v-for="tag in orari"
        :key="tag"
    >
        {{ tag }}
    </v-chip>
    </v-chip-group>
    </div>
</template>

<script>
import state from '@/store/index'

export default {
    name: 'selezionaGiorno',
    props: {
        selezionato: Number,
        maxGiorni: Number
    },
    data() {
        return {
            selezionati: [],
            orari: state.getters.orari
        }
    },
    watch: {
        selezionati: function () {
            const sorted = [...this.selezionati[this.selezionato]].sort();
            this.$emit('orarioSelezionato', sorted)
        }
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
                this.selezionati.push([])
            }
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
