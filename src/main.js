import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import { initializeApp } from "firebase/app"


initializeApp({
    apiKey: "AIzaSyC1VMKO02rhZRzoesA9gm3-2EGsAGncNwA",
    authDomain: "forra-bucho.firebaseapp.com",
    projectId: "forra-bucho",
    storageBucket: "forra-bucho.appspot.com",
    messagingSenderId: "734398951793",
    appId: "1:734398951793:web:f3351d4a9c60ada064c6d0",
    measurementId: "G-FXHR4SH6R2"
})


createApp(App).use(store).use(router).mount('#app')
