import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prenotazioni: { 1: {}, 2: {} }
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
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    prenotazioni: function (state) {
      return state.prenotazioni
    }
  }
})
