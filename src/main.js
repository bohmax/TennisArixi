import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import firebase from 'firebase/compat/app'
import router from './router'
import store from './store'
// import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH-TcPASZAGFQU5JjkkrImhLRj6a50btA",
  authDomain: "test-tennis-6b716.firebaseapp.com",
  projectId: "test-tennis-6b716",
  storageBucket: "test-tennis-6b716.appspot.com",
  messagingSenderId: "416414686555",
  appId: "1:416414686555:web:4569b86c7af753a97a0e7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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