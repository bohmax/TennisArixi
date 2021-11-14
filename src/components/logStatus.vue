<template>
    <v-col align="center">
        <v-row justify="center">
            {{ loggato }}
        </v-row>
        <v-row v-if="isLogged" justify="center">
            <v-btn @click="logout">LOGOUT</v-btn>
        </v-row>
        <v-row v-if="isLogged && !userVerificato" justify="center">
            <v-btn @click="codiceVerifica">Codice Verifica</v-btn>
        </v-row>
    </v-col>
</template>

<script>
import store from '../store/index'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
    name: 'Prenota',
    created: function () {
        firebase.auth().onAuthStateChanged(user => {
            store.commit('updateUser', user)
            this.isLogged = !!user
        })
    },
    data() {
        return {
            isLogged: false,
        }
    },
    computed: {
        loggato: function () {
            if (this.isLogged) {
                return 'Yes ' + this.verified
            }
            return 'No'
        },
        userVerificato: function () {
            const usr = store.getters.user
            if (usr) {
                return usr.emailVerified
            }
            return false
        },
        verified: function () {
            const usr = store.getters.user
            if (usr) {
                return usr.displayName + (usr.emailVerified ? ' Verificato' : ' Non verificato')
            }
            return ''
        }
    },
    methods: {
        async logout() {
            firebase.auth().signOut().then(() => {
                this.$router.replace({name: 'Login'})
            }).catch (err => {
                console.log(err)
            })
        },
        codiceVerifica: function () {
            const usr = store.getters.user
            if (usr) {
                usr.sendEmailVerification().then(() => {
                    alert('Email di verifica inviata, controllare la posta per verificare l\'account e poter prenotare il campo')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
}
</script>
