import Vue from 'vue'
import App from './App.vue'
import GoldenGrid from '@/plugins/GoldenGrid.js'
Vue.use(GoldenGrid, {fibShort: 13, fibLong: 21})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

