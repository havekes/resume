import Vue from 'vue'
import CV from './CV.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/index.css'

// FontAwesome icons
library.add(faLinkedin, faGithub, faGlobe)
Vue.component('FaIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(CV),
}).$mount('#app')
