import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)


Vue.use(BootstrapVue)

Vue.config.productionTip = false


import "@/assets/styles/colors.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
