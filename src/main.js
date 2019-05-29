import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faMapMarker,
	faGithubSquare,
	faLinkedin,
	faInstagram
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
