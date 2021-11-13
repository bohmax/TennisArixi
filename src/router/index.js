import Vue from 'vue'
import VueRouter from 'vue-router'
import Registrazione from '../components/Account/Registrazione.vue'
import Prenotazioni from '../components/Prenota/Prenota'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Prenota',
    component: Prenotazioni,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Registrazione
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (to.name !== 'Login' ){
    next();
  } else if (isAuthenticated) { // se l'utente e' autenticato non andare su login
    next(from)
  }
});

export default router
