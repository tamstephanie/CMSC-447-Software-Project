import Vue from 'vue'
import App from './App.vue'

// In development mode
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
}).$mount('#app')
