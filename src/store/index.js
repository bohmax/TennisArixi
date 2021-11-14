import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prenotazioni: { 1: {}, 2: {} },
    datiGiorni: {},
    mese: ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"],
    weekday: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    orari: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    user: null
  },
  mutations: {
    addPrenotazione: function (state, obj) {
      const selCampo = state.prenotazioni[obj.campo]
      if (selCampo) {
        const giorno = obj.giorno.giorno
        if (!selCampo[giorno]) {
          Vue.set(selCampo, giorno, obj.orari)
        }
        selCampo[giorno] = obj.orari
        state.datiGiorni[giorno] = obj.giorno
      }
    },
    updateUser: function (state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    prenotazioni: function (state) {
      return state.prenotazioni
    },
    weekday: function (state) {
      return state.weekday
    },
    mese: function (state) {
      return state.mese
    },
    orari: function (state) {
      return state.orari
    },
    datiGiorni: (state) => (giorno) => {
      return state.datiGiorni[giorno]
    },
    user: function (state) {
      return state.user
    }
  }
})
