import Vue from 'vue'
import App from './App.vue'
import vpay from './lib/vpay'

Vue.use(vpay)

new Vue({
  el: '#app',
  render: h => h(App)
})
