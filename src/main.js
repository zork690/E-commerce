import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHeart, faShoppingCart, faLock, faHotel,faShuttleVan, faAward, faPhoneVolume, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faWhatsappSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faUser, faHeart, faShoppingCart, faLock, faHotel, faShuttleVan, faAward, faPhoneVolume, faSearch, faBars, faFacebookSquare, faWhatsappSquare, faInstagramSquare)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
