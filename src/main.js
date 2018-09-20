import Vue from 'vue'
import axios from 'axios';
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

window.axios = axios;

// window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
// window.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
// window.axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
// window.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// window.axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'

new Vue({
  el: '#app',
  render: h => h(App)
})
