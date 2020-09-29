import Vue from 'vue'
import App from './App.vue'
import GoldenGrid from '@/plugins/GoldenGrid.js'
const options = {
  gridOrigin: {
    x: 1,
    y: 1,
  },
  gridDimension: {
    x:21,
    y:34
  },
  origin: {
    x: 1,
    y: 1,
  },
  dimension: {
    x:21,
    y:34
  }
}

Vue.use(GoldenGrid, options)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

