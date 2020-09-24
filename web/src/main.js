import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filter from '@/shared/filters'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
