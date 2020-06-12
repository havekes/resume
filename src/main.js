import Vue from 'vue'
import CV from './CV.vue'

import './assets/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(CV),
}).$mount('#app')
