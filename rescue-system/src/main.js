import Vue from 'vue'
import './plugins/vuetify'

import { router } from './helpers/router'
import App from './App'

// In development mode
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});