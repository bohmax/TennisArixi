<template>
    <div id="status">
        <span v-if="isLogged">Yes</span>
        <span v-else>NO</span>
        <v-btn @click="logout">LOGOUT</v-btn>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
    name: 'Prenota',
    created: function () {
        firebase.auth().onAuthStateChanged(user => {
            this.isLogged = !!user
        })
    },
    data() {
        return {
            isLogged: false
        }
    },
    methods: {
        async logout() {
            firebase.auth().signOut().then(data => {
                console.log(data)
                this.$router.replace({name: 'Login'})
            }).catch (err => {
                console.log(err)
            })
        }
    }
}
</script>
