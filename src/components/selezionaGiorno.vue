<template>
  <div>
    <v-row>
        <v-col v-for="(el, index) in giorni"
        :key="index">
            <v-card @click="seleziona(index)" :color="el.colore" class="px-1">
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
  </div>
</template>

<script>

export default {
    name: 'selezionaGiorno',
    data() {
        return {
            giorni: [],
            maxGiorni: 10,
            mese: ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"],
            weekday: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            selezionato: 0
        }
    },
    mounted() {
        this.calcolaGiorni()
    },
    methods: {
        calcolaGiorni: function () {
            const date = new Date()
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
