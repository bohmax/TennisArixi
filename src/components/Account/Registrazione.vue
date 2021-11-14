<template>
    <v-row justify="center">
        <v-card max-width="600">
            <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                <v-tab v-for="i in tabs" :key="i.name">
                    <v-icon large>{{ i.icon }}</v-icon>
                    <div class="caption py-1">{{ i.name }}</div>
                </v-tab>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="loginForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]"
                                        :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Almeno 6 caratteri" counter @click:append="show1 = !show1"  @keydown.enter.prevent="validateLogin" ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex">
                                        <v-btn x-large block :disabled="!valid" color="success" @click="validateLogin"> Login </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="registerForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="firstName" :rules="[rules.required]" label="Nome" maxlength="20" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="lastName" :rules="[rules.required]" label="Cognome" maxlength="20" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Almeno 6 caratteri" counter @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]"
                                        :type="show1 ? 'text' : 'password'" name="input-10-1" label="Conferma Password" counter @click:append="show1 = !show1" @keydown.enter.prevent="validateReg"></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex">
                                        <v-btn x-large block :disabled="!valid" color="success" @click="validateReg">Registrati</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-row>
</template>

<script>
import firebase, { utenti } from '../../firebase/index'
import 'firebase/compat/auth'


export default {
    name: 'Registrati',
    props: {
    },
    data() {
        return {
            tab: 0,
            tabs: [
                {name:"Login", icon:"mdi-account"},
                {name:"Registrati", icon:"mdi-account-outline"}
            ],
            valid: true,

            firstName: "",
            lastName: "",
            email: "",
            password: "",
            verify: "",
            loginPassword: "",
            loginEmail: "",
            loginEmailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            emailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            rules: {
                required: value => !!value || "Required.",
                min: v => (v && v.length >= 6) || "Min 6 caratteri"
            },
            show1: false,
        }
    },
    computed: {
        passwordMatch() {
            return () => this.password === this.verify || "Password must match";
        }
    },
    methods: {
        async validateLogin() {
            if (this.$refs.loginForm.validate()) {
                firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword).
                then(user => {
                    console.log(user)
                    this.$router.replace({name: 'Prenota'})
                    this.$refs.loginForm.reset()
                }).catch (err => {
                    console.log(err)
                })
            }
        },
        async validateReg() {
            if (this.$refs.registerForm.validate()) {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
                    console.log(user)
                    user.user.updateProfile({displayName: this.firstName + ' ' + this.lastName})
                    .then(() => {
                        // Profile updated successfully!
                        console.log(user.displayName);
                    }).catch(error => {
                        console.log(error)
                    })
                    utenti.child(user.user.uid).set({
                      nome: this.firstName,
                      cognome: this.lastName,
                      saldo: 0
                    }).then(value => console.log(value))
                    .catch(err => console.log(err))
                    user.user.sendEmailVerification().then(() => {
                      alert('Email di verifica inviata, controllare la posta per verificare ' +
                          'l\'account e poter prenotare il campo')
                    }).catch(err => {
                        console.log(err)
                    })
                    this.$router.replace({name: 'Prenota'})
                    this.$refs.registerForm.reset()
                }).catch (err => {
                    console.log(err)
                })
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    }
}
</script>
