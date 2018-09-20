import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

export const bus = new Vue();

Vue.use(BootstrapVue)

window.axios = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
