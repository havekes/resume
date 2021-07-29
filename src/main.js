import Vue from 'vue'
import Resume from './Resume.vue'
import './assets/index.css'

// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faGlobe } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(Resume),
}).$mount('#app')
