import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
require('jquery')
require('popper.js')
require('bootstrap/dist/css/bootstrap.min.css')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
