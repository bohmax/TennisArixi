import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
// import axios from 'axios'
import vuetify from './plugins/vuetify'
import firebase from './firebase/index'

Vue.config.productionTip = false
Vue.use(firestorePlugin)
let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
